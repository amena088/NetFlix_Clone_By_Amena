import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDLLQHDHJXLEfMIU3OMjyQ2po2tX3mYXkA",
  authDomain: "react-netflix-clone-6c99f.firebaseapp.com",
  projectId: "react-netflix-clone-6c99f",
  storageBucket: "react-netflix-clone-6c99f.appspot.com",
  messagingSenderId: "900861569426",
  appId: "1:900861569426:web:531f80af78e1a7aaa3794b",
  measurementId: "G-XX9Q9F58EL"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);