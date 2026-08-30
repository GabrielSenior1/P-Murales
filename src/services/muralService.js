import { collection, getDocs, doc, getDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../config/firebase.js';

// Datos de prueba iniciales (fallback offline/mock)
export const SAMPLE_MURALS = [
  {
    id: "mural-01",
    title: "Mural Ancestral Tayrona",
    artist: "Colectivo Sierra Viva",
    location: "Plaza Principal - Sector Centro",
    category: "Cultura & Historia",
    description: "Representación tridimensional de la iconografía y guardianes ancestrales de la Sierra Nevada.",
    glbUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb", // URL de prueba interactiva
    usdzUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz",
    thumbnail: "🎨",
    year: "2024",
    dimensions: "12m x 4m",
    arScale: "auto"
  },
  {
    id: "mural-02",
    title: "El Jaguar del Bosque Húmedo",
    artist: "Mariana Restrepo",
    location: "Calle 15 con Carrera 4ta",
    category: "Fauna Silvestre",
    description: "Mural tridimensional hiperrealista del felino más imponente de la región del Caribe.",
    glbUrl: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
    usdzUrl: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.usdz",
    thumbnail: "🐆",
    year: "2024",
    dimensions: "8m x 5m",
    arScale: "auto"
  },
  {
    id: "mural-03",
    title: "Ecosistema de Manglar y Corales",
    artist: "Taller Mar y Sierra",
    location: "Paseo del Malecón",
    category: "Flora y Mar",
    description: "Inmersión 3D en las raíces del manglar rojo y las especies marinas que habitan en él.",
    glbUrl: "https://modelviewer.dev/shared-assets/models/reflective-sphere.gltf",
    usdzUrl: "",
    thumbnail: "🌿",
    year: "2025",
    dimensions: "15m x 3.5m",
    arScale: "auto"
  }
];

/**
 * Obtiene la lista completa de murales desde Firestore o desde datos de prueba
 */
export async function getMurals() {
  if (isFirebaseConfigured() && db) {
    try {
      const muralsRef = collection(db, 'murales');
      const q = query(muralsRef, orderBy('title'));
      const snapshot = await getDocs(q);
      
      if (!snapshot.empty) {
        return snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      }
      console.info("ℹ️ La colección 'murales' en Firestore está vacía. Mostrando murales de demostración.");
    } catch (error) {
      console.warn("⚠️ No se pudieron cargar los murales de Firestore, usando fallback local:", error.message);
    }
  }
  
  return SAMPLE_MURALS;
}

/**
 * Suscripción en tiempo real a los cambios en Firestore
 */
export function subscribeToMurals(callback) {
  if (isFirebaseConfigured() && db) {
    try {
      const muralsRef = collection(db, 'murales');
      return onSnapshot(muralsRef, (snapshot) => {
        if (!snapshot.empty) {
          const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          callback(list);
        } else {
          callback(SAMPLE_MURALS);
        }
      }, (error) => {
        console.warn("⚠️ Error en snapshot de Firestore:", error);
        callback(SAMPLE_MURALS);
      });
    } catch (error) {
      console.warn("⚠️ Error suscribiendo a Firestore:", error);
    }
  }

  // Si no está configurado Firebase, invocar callback inmediatamente con los datos locales
  callback(SAMPLE_MURALS);
  return () => {};
}

/**
 * Obtener un mural por su ID
 */
export async function getMuralById(id) {
  if (isFirebaseConfigured() && db) {
    try {
      const docRef = doc(db, 'murales', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      }
    } catch (error) {
      console.warn(`Error buscando mural ${id} en Firestore:`, error);
    }
  }
  return SAMPLE_MURALS.find(m => m.id === id) || null;
}
