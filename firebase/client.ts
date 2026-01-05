// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAk8zKg1cw8oBgvI8FXF_lh0ftu_XY25o",
  authDomain: "preptalk-2e193.firebaseapp.com",
  projectId: "preptalk-2e193",
  storageBucket: "preptalk-2e193.firebasestorage.app",
  messagingSenderId: "251261228092",
  appId: "1:251261228092:web:ee59d06cd494383f7a9f39",
  measurementId: "G-Q611ZEFZ2M",
};

// Initialize Firebase
const app = !getApps() ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
