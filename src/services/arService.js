import QRCode from 'qrcode';

/**
 * Detecta el tipo de dispositivo y sistema operativo
 */
export function detectDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  const isAndroid = /android/i.test(userAgent);
  const isMobile = isIOS || isAndroid;

  return {
    isIOS,
    isAndroid,
    isMobile,
    isDesktop: !isMobile
  };
}

/**
 * Genera un Data URL con el código QR para abrir el modelo actual en el móvil
 */
export async function generateARQRCode(muralId) {
  try {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('mural', muralId);
    currentUrl.searchParams.set('ar_mode', 'direct');

    const qrDataUrl = await QRCode.toDataURL(currentUrl.toString(), {
      width: 260,
      margin: 2,
      color: {
        dark: '#111827',
        light: '#FFFFFF'
      }
    });

    return {
      url: currentUrl.toString(),
      qrDataUrl
    };
  } catch (error) {
    console.error("Error generando código QR:", error);
    return null;
  }
}

/**
 * Configura los atributos del componente <model-viewer>
 */
export function setupModelViewer(viewerElement, mural) {
  if (!viewerElement || !mural) return;

  // Modelo principal (.glb / .gltf)
  viewerElement.setAttribute('src', mural.glbUrl || '');
  
  // Modelo para iOS QuickLook (.usdz)
  if (mural.usdzUrl) {
    viewerElement.setAttribute('ios-src', mural.usdzUrl);
  } else {
    viewerElement.removeAttribute('ios-src');
  }

  viewerElement.setAttribute('alt', mural.title || 'Modelo 3D Mural');
  viewerElement.setAttribute('ar', '');
  viewerElement.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
  viewerElement.setAttribute('camera-controls', '');
  viewerElement.setAttribute('touch-action', 'pan-y');
  viewerElement.setAttribute('auto-rotate', '');
  viewerElement.setAttribute('shadow-intensity', '1');
}
