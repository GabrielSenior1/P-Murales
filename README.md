# 🏛️ Proyecto Murales 3D & WebAR

Plataforma web interactiva para la exploración y visualización en **Realidad Aumentada (AR)** de murales tridimensionales, con backend conectado temporalmente a **Firebase** (Firestore y Cloud Storage) y soporte para visualización cross-platform (WebXR, Google SceneViewer en Android y Apple QuickLook en iOS).

---

## 📁 Estructura del Proyecto

```
Proyecto Murales/
├── index.html                 # Página principal y contenedor del visor 3D (<model-viewer>)
├── package.json               # Dependencias (Vite, Firebase, @google/model-viewer, qrcode)
├── vite.config.js             # Configuración del servidor de desarrollo Vite
├── .env.example               # Plantilla de credenciales de Firebase
└── src/
    ├── main.js                # Controlador principal de la UI y eventos
    ├── config/
    │   └── firebase.js        # Inicialización del SDK de Firebase (Firestore & Storage)
    ├── services/
    │   ├── muralService.js    # Consulta y suscripción en tiempo real a Firestore (con fallback mock)
    │   └── arService.js       # Detección de dispositivos, generación de QR para móviles y setup AR
    └── styles/
        └── main.css           # Estructura modular lista para integración visual con Google Stitch
```

---

## 🚀 Inicio Rápido

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar el servidor local:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   - En tu computadora: `http://localhost:5173`
   - Desde tu celular en la misma red Wi-Fi: `http://<IP-DE-TU-PC>:5173`

---

## ☁️ Conexión con Firebase

1. Copia `.env.example` a un archivo `.env`:
   ```bash
   cp .env.example .env
   ```
2. Completa los valores con las credenciales de tu proyecto de [Firebase Console](https://console.firebase.google.com/):
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

> **Nota:** Si no configuras Firebase de inmediato, la plataforma funciona de manera autónoma con modelos y datos de demostración locales.

---

## 🎨 Integración con Google Labs Stitch
El archivo [src/styles/main.css](file:///c:/Users/TEMP.LAPTOP-NKQ8BATR.001/OneDrive/Escritorio/Proyecto%20Murales/src/styles/main.css) cuenta con una arquitectura de variables CSS y clases semánticas (`.mural-card`, `.viewer-wrapper`, `.detail-card`, etc.) listas para reemplazar y estilizar fácilmente con el diseño generado en Stitch.
