import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzo_iF0Xl3g4vIFNxLlOeARYFwgyhNiAo",
  authDomain: "clone-30032.firebaseapp.com",
  projectId: "clone-30032",
  storageBucket: "clone-30032.appspot.com",
  messagingSenderId: "942328398394",
  appId: "1:942328398394:web:83f5e767bfdf721fb82b03",
  measurementId: "G-ZL6NE8PDFZ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
