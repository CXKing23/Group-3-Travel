// src/pages/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAWKGoOFMBk2qGj_T4Pozt59qGcYA37kk",
  authDomain: "shareyourtravel-21de7.firebaseapp.com",
  projectId: "shareyourtravel-21de7",
  storageBucket: "shareyourtravel-21de7.firebasestorage.app",
  messagingSenderId: "819777101057",
  appId: "1:819777101057:web:d2714f97b6355e21c94f00",
  measurementId: "G-QT50R4H9Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Authentication
export const auth = getAuth(app);

// Optional: Wrap these functions if you want to use them directly in your components
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
  return signOut(auth);
};

// Handle contact form submission (for plain HTML usage, not React)
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      try {
        await addDoc(collection(db, "contactMessages"), {
          name,
          email,
          message,
          timestamp: serverTimestamp()
        });

        successMessage.style.display = "block";
        contactForm.reset();
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 5000);
      } catch (error) {
        console.error("Error submitting message: ", error);
        alert("Failed to send message. Please try again later.");
      }
    });
  }
});
