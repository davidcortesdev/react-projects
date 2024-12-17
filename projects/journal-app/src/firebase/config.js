// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3LxcygeDJxlH-WM34xlFgRDR9KHrNrIc",
  authDomain: "react-apps-aef1a.firebaseapp.com",
  projectId: "react-apps-aef1a",
  storageBucket: "react-apps-aef1a.firebasestorage.app",
  messagingSenderId: "807645159886",
  appId: "1:807645159886:web:d900aea279083a0f994b9f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )