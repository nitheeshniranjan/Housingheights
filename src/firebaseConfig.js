import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,  
  createUserWithEmailAndPassword
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq0q_Q8QmwL3Y9yllyfc87Fagy0PQgXz4",
  authDomain: "realestate-d3aee.firebaseapp.com",
  projectId: "realestate-d3aee",
  storageBucket: "realestate-d3aee.appspot.com",
  messagingSenderId: "751364966282",
  appId: "1:751364966282:web:8f887bc0140025ffe1aa73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// ✅ Correct Export: Export `signInWithPopup`
export { auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword };

