// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js"; // Import database module

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsW3RJuveAzxSXL0fHN0Qm0JFhleP0HYs",
    authDomain: "travel-adventur.firebaseapp.com",
    databaseURL: "https://travel-adventur-default-rtdb.firebaseio.com/",  // Realtime database URL
    projectId: "travel-adventur",
    storageBucket: "travel-adventur.appspot.com",
    messagingSenderId: "299228977712",
    appId: "1:299228977712:web:b43f66ab8ce1dc7b04abf5",
    measurementId: "G-NZ4L2Y9Z3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Firebase authentication instance
const database = getDatabase(app); // Firebase Realtime Database instance

export { auth, database };
