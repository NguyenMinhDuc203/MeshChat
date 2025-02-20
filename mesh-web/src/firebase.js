import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA4AjelqxujNa0Ii2nttBZBJ1qqDE2cLQ",
  authDomain: "meshchat-f6977.firebaseapp.com",
  projectId: "meshchat-f6977",
  storageBucket: "meshchat-f6977.firebasestorage.app",
  messagingSenderId: "90744615945",
  appId: "1:90744615945:web:2472948957b57a042ef4d8",
  measurementId: "G-25GZ1RZY3Y"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 
export const db = getFirestore(app);
export default app;

