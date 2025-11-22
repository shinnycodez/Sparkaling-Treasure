// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyD3HSSy7TtkNd36V47AkxnTFHUnpl5-Q6s",
  authDomain: "sparkaling-71b79.firebaseapp.com",
  projectId: "sparkaling-71b79",
  storageBucket: "sparkaling-71b79.firebasestorage.app",
  messagingSenderId: "954250779322",
  appId: "1:954250779322:web:1c5b75bb84df1c56314083",
  measurementId: "G-PCRWZY73N8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Export the db
export { db };