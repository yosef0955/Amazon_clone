import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdu2ykVZsuzXDXKqfn0aEnVnygf8ECYM4",
  authDomain: "clone-abe56.firebaseapp.com",
  projectId: "clone-abe56",
  storageBucket: "clone-abe56.firebasestorage.app",
  messagingSenderId: "248603838094",
  appId: "1:248603838094:web:78a195fa0a0b6ce36b2bdf"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();