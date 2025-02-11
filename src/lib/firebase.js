import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-6fe2c.firebaseapp.com",
  projectId: "reactchat-6fe2c",
  storageBucket: "reactchat-6fe2c.firebasestorage.app",
  messagingSenderId: "210108782643",
  appId: "1:210108782643:web:eb57df0eec42852aa7ab46"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()