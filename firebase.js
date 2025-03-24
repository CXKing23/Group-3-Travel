// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJtZQOHtQpOMrND5vq2Y8c42ff_mDXI6c",
    authDomain: "traveladventure-84e45.firebaseapp.com",
    databaseURL: "https://traveladventure-84e45-default-rtdb.firebaseio.com",
    projectId: "traveladventure-84e45",
    storageBucket: "traveladventure-84e45.firebasestorage.app",
    messagingSenderId: "1028036343172",
    appId: "1:1028036343172:web:91e3070694278223fe99d1",
    measurementId: "G-C0NV5SCEYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
