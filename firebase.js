// src/pages/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
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

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check if fields are filled
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            // Add data to Firestore
            await addDoc(collection(db, "contactMessages"), {
                name: name,
                email: email,
                message: message,
                timestamp: serverTimestamp()
            });

            // Show success message
            successMessage.style.display = "block";

            // Clear form fields
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);

        } catch (error) {
            console.error("Error submitting message: ", error);
            alert("Failed to send message. Please try again later.");
        }
    });
});

