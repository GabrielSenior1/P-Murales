import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configuración de Firebase
// Puedes ingresar tus credenciales directamente aquí o en un archivo .env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDtwvcUgszXXXuF82biS3bgOGEE-wKuSQw",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "p-murales.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "p-murales",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "p-murales.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1084288890756",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1084288890756:web:3f239f1ed01c8cd4340fd1"
};

// Verifica si la configuración aún tiene los valores por defecto de marcador de posición
export const isFirebaseConfigured = () => {
  return (
    firebaseConfig.apiKey !== "YOUR_API_KEY" &&
    firebaseConfig.projectId !== "YOUR_PROJECT_ID" &&
    Boolean(firebaseConfig.apiKey)
  );
};

// Inicialización condicional de Firebase
let app = null;
let db = null;
let storage = null;

try {
  if (isFirebaseConfigured()) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
    storage = getStorage(app);
    console.log("🔥 Firebase inicializado correctamente:", firebaseConfig.projectId);
  } else {
    console.warn("⚠️ Firebase no tiene credenciales configuradas. Se usarán datos locales/mock temporalmente.");
  }
} catch (error) {
  console.error("❌ Error inicializando Firebase:", error);
}

export { app, db, storage, firebaseConfig };
