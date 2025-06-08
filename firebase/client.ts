import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUI2kG7MPMnG42epK0IFd2iwsbXRq5NTo",
  authDomain: "ai-interview-ef0dc.firebaseapp.com",
  projectId: "ai-interview-ef0dc",
  storageBucket: "ai-interview-ef0dc.firebasestorage.app",
  messagingSenderId: "973885347813",
  appId: "1:973885347813:web:5f1e7298bb9aee48f5410c",
  measurementId: "G-CPCQKG241N"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
