// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ashley-estate.firebaseapp.com",
  projectId: "ashley-estate",
  storageBucket: "ashley-estate.appspot.com",
  messagingSenderId: "644481119913",
  appId: "1:644481119913:web:2ef4eb794e35ddc39f1bb8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);