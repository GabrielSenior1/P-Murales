import { isFirebaseConfigured, firebaseConfig } from './config/firebase.js';
import { getMurals, subscribeToMurals } from './services/muralService.js';
import { detectDevice, generateARQRCode, setupModelViewer } from './services/arService.js';

// Estado de la aplicación
let currentMurals = [];
let selectedMural = null;
const device = detectDevice();

// Elementos del DOM
const elements = {
  statusIndicator: document.getElementById('status-indicator'),
  statusText: document.getElementById('status-text'),
  muralsList: document.getElementById('murals-list'),
  muralCount: document.getElementById('mural-count'),
  viewer: document.getElementById('mural-viewer'),
  btnOpenQr: document.getElementById('btn-open-qr'),
  qrModal: document.getElementById('qr-modal'),
  btnCloseModal: document.getElementById('btn-close-modal'),
  qrImage: document.getElementById('qr-image'),
  btnAr: document.getElementById('btn-ar'),
  btnArText: document.getElementById('btn-ar-text'),
  detailTitle: document.getElementById('detail-title'),
  detailArtist: document.getElementById('detail-artist'),
  detailLocation: document.getElementById('detail-location'),
  detailCategory: document.getElementById('detail-category'),
  detailDescription: document.getElementById('detail-description'),
  specYear: document.getElementById('spec-year'),
  specDimensions: document.getElementById('spec-dimensions'),
  specFormat: document.getElementById('spec-format'),
};

/**
 * Actualiza el indicador de conexión con el backend (Firebase o Local)
 */
function updateServerStatus() {
  if (isFirebaseConfigured()) {
    elements.statusIndicator.className = 'status-dot online';
    elements.statusText.textContent = `Firebase Conectado (${firebaseConfig.projectId})`;
  } else {
    elements.statusIndicator.className = 'status-dot fallback';
    elements.statusText.textContent = 'Servidor Local (Modo Demostración)';
  }
}

/**
 * Renderiza la lista de murales en la barra lateral
 */
function renderMuralsList(murals) {
  currentMurals = murals;
  elements.muralCount.textContent = `${murals.length} mural${murals.length === 1 ? '' : 'es'}`;
  elements.muralsList.innerHTML = '';

  murals.forEach((mural) => {
    const card = document.createElement('div');
    card.className = `mural-card ${selectedMural && selectedMural.id === mural.id ? 'active' : ''}`;
    card.dataset.id = mural.id;

    card.innerHTML = `
      <div class="mural-icon">${mural.thumbnail || '🎨'}</div>
      <div class="mural-info">
        <div class="mural-card-title">${mural.title}</div>
        <div class="mural-card-location">${mural.location || 'Ubicación sin especificar'}</div>
      </div>
    `;

    card.addEventListener('click', () => selectMural(mural));
    elements.muralsList.appendChild(card);
  });
}

/**
 * Selecciona un mural y actualiza el visor 3D y la ficha técnica
 */
function selectMural(mural) {
  if (!mural) return;
  selectedMural = mural;

  // Actualizar tarjetas activas en la lista
  const cards = elements.muralsList.querySelectorAll('.mural-card');
  cards.forEach(c => {
    c.classList.toggle('active', c.dataset.id === mural.id);
  });

  // Configurar visor 3D
  setupModelViewer(elements.viewer, mural);

  // Actualizar ficha técnica
  elements.detailTitle.textContent = mural.title || 'Mural Sin Título';
  elements.detailArtist.textContent = `Artista: ${mural.artist || 'Desconocido'}`;
  elements.detailLocation.textContent = `Ubicación: ${mural.location || 'No especificada'}`;
  elements.detailCategory.textContent = `Categoría: ${mural.category || 'General'}`;
  elements.detailDescription.textContent = mural.description || 'Sin descripción disponible.';
  elements.specYear.textContent = mural.year || '—';
  elements.specDimensions.textContent = mural.dimensions || '—';
  
  const formats = [];
  if (mural.glbUrl) formats.push('GLB/GLTF');
  if (mural.usdzUrl) formats.push('USDZ (iOS)');
  elements.specFormat.textContent = formats.length ? formats.join(' / ') : 'GLB';

  // Actualizar URL sin recargar para permitir compartir
  const url = new URL(window.location.href);
  url.searchParams.set('mural', mural.id);
  window.history.replaceState({}, '', url);
}

/**
 * Muestra el modal con el código QR para abrir el mural en el celular
 */
async function openQRCodeModal() {
  if (!selectedMural) return;
  
  const qrData = await generateARQRCode(selectedMural.id);
  if (qrData) {
    elements.qrImage.src = qrData.qrDataUrl;
    elements.qrModal.classList.add('open');
  }
}

/**
 * Cierra el modal de QR
 */
function closeQRCodeModal() {
  elements.qrModal.classList.remove('open');
}

/**
 * Inicialización principal
 */
async function initApp() {
  updateServerStatus();

  // Ocultar botón de QR si el usuario ya está navegando desde un celular
  if (device.isMobile) {
    elements.btnOpenQr.style.display = 'none';
  }

  // Event Listeners
  elements.btnOpenQr.addEventListener('click', openQRCodeModal);
  elements.btnCloseModal.addEventListener('click', closeQRCodeModal);
  elements.qrModal.addEventListener('click', (e) => {
    if (e.target === elements.qrModal) closeQRCodeModal();
  });

  // Manejar estado de carga del botón AR
  if (elements.btnAr) {
    elements.btnAr.addEventListener('click', async () => {
      const originalText = elements.btnArText.textContent;
      const icon = elements.btnAr.querySelector('.material-symbols-outlined');
      const originalIcon = icon.textContent;
      
      // Estado de carga
      elements.btnArText.textContent = 'Descargando (150MB)...';
      icon.textContent = 'sync';
      icon.classList.add('animate-spin');
      elements.btnAr.style.opacity = '0.7';
      elements.btnAr.style.pointerEvents = 'none';

      try {
        await elements.viewer.activateAR();
      } catch (e) {
        console.error("Error activando AR:", e);
        resetARButton(elements.btnArText, icon, originalText, originalIcon);
      }
      
      // Restaurar botón como respaldo en caso de que falle silenciosamente (30 segundos)
      const fallbackTimer = setTimeout(() => {
        resetARButton(elements.btnArText, icon, originalText, originalIcon);
      }, 30000);

      // Escuchar cuando el AR realmente inicie o se cancele
      elements.viewer.addEventListener('ar-status', function onARStatus(event) {
        if (event.detail.status === 'session-started' || event.detail.status === 'failed' || event.detail.status === 'not-presenting') {
          clearTimeout(fallbackTimer);
          resetARButton(elements.btnArText, icon, originalText, originalIcon);
          elements.viewer.removeEventListener('ar-status', onARStatus);
        }
      });
    });
  }

  function resetARButton(textElement, iconElement, originalText, originalIcon) {
    if (textElement.textContent !== originalText) {
      textElement.textContent = originalText;
      iconElement.textContent = originalIcon;
      iconElement.classList.remove('animate-spin');
      elements.btnAr.style.opacity = '1';
      elements.btnAr.style.pointerEvents = 'auto';
    }
  }

  // Cargar datos iniciales
  const initialMurals = await getMurals();
  renderMuralsList(initialMurals);

  // Seleccionar mural desde parámetro URL o el primero por defecto
  const urlParams = new URLSearchParams(window.location.search);
  const muralIdParam = urlParams.get('mural');
  const targetMural = initialMurals.find(m => m.id === muralIdParam) || initialMurals[0];
  
  if (targetMural) {
    selectMural(targetMural);
  }

  // Suscribirse a cambios en Firestore
  subscribeToMurals((updatedMurals) => {
    renderMuralsList(updatedMurals);
    if (selectedMural) {
      const stillExists = updatedMurals.find(m => m.id === selectedMural.id);
      if (stillExists) {
        selectMural(stillExists);
      }
    }
  });
}

// Iniciar aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', initApp);
