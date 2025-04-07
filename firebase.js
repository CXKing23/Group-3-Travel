// src/pages/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDAWKGoOFMBk2qGj_T4Pozt59qGcYA37kk",
    authDomain: "shareyourtravel-21de7.firebaseapp.com",
    projectId: "shareyourtravel-21de7",
    storageBucket: "shareyourtravel-21de7.firebasestorage.app",
    messagingSenderId: "819777101057",
    appId: "1:819777101057:web:d2714f97b6355e21c94f00",
    measurementId: "G-QT50R4H9Z5"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
