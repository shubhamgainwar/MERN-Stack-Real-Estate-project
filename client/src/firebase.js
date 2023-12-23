// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-real-estate-6a3ce.firebaseapp.com",
  projectId: "mern-stack-real-estate-6a3ce",
  storageBucket: "mern-stack-real-estate-6a3ce.appspot.com",
  messagingSenderId: "157768994737",
  appId: "1:157768994737:web:54e41b9019ed5f5fe2b790",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
