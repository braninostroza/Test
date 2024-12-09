import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Configuración de Firebase

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG || '{}');

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);


// Exportar la instancia de Firestore
export { db };