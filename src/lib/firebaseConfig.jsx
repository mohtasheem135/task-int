// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfXHoq8ULC7V5D2BfI2VnjBEKBfYDJAA0",
  authDomain: "auth-production-6d8c7.firebaseapp.com",
  projectId: "auth-production-6d8c7",
  storageBucket: "auth-production-6d8c7.firebasestorage.app",
  messagingSenderId: "558793888634",
  appId: "1:558793888634:web:536bd0c35d881236e3fcc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googlrProvider = new GoogleAuthProvider();