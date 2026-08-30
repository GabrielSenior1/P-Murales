import { collection, getDocs, doc, getDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../config/firebase.js';

// Datos de prueba iniciales (fallback offline/mock)
export const SAMPLE_MURALS = [
  {
    id: "mural-01",
    title: "MURAL 01 – LAS HORMIGAS",
    artist: "Gabriel Senior",
    location: "Galería Principal",
    category: "Murales Vivos",
    description: "Una exploración visual de las hormigas en su hábitat natural, cobrando vida en Realidad Aumentada.",
    glbUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb", // Reemplazar con URL real
    usdzUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz",
    thumbnail: "🐜",
    year: "2026",
    dimensions: "A escala",
    arScale: "auto"
  },
  {
    id: "mural-02",
    title: "MURAL 02 – LA CANOA",
    artist: "Gabriel Senior",
    location: "Exhibición Acuática",
    category: "Murales Vivos",
    description: "Mural tridimensional de una canoa tradicional interactiva.",
    glbUrl: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb", // Reemplazar con URL real
    usdzUrl: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.usdz",
    thumbnail: "🛶",
    year: "2026",
    dimensions: "A escala",
    arScale: "auto"
  },
  {
    id: "mural-03",
    title: "MURAL 03 – LA SEÑORA LAVANDO",
    artist: "Gabriel Senior",
    location: "Paseo Cultural",
    category: "Costumbres",
    description: "Escena costumbrista de una señora lavando, capturada en un modelo 3D detallado.",
    glbUrl: "https://modelviewer.dev/shared-assets/models/reflective-sphere.gltf", // Reemplazar con URL real
    usdzUrl: "",
    thumbnail: "🧺",
    year: "2026",
    dimensions: "A escala",
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
