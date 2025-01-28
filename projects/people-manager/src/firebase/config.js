// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI3_Z2Rc93NIzmsw_9FZaREY5MHgNad40",
  authDomain: "people-manager-2c251.firebaseapp.com",
  projectId: "people-manager-2c251",
  storageBucket: "people-manager-2c251.firebasestorage.app",
  messagingSenderId: "149411467507",
  appId: "1:149411467507:web:958c6bce4dac447f31a786"
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )