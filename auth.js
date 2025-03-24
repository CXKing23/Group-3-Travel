// Initialize Firebase Authentication
const auth = firebase.auth();

// Get input fields and buttons
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signUpButton = document.getElementById("sign-up");
const signInButton = document.getElementById("sign-in");
const signOutButton = document.getElementById("sign-out");
const authMessage = document.getElementById("auth-message");

// Sign Up
signUpButton.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            authMessage.textContent = "Account created successfully!";
            signOutButton.style.display = "block";
        })
        .catch(error => {
            authMessage.textContent = "Error: " + error.message;
        });
});

// Sign In
signInButton.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            authMessage.textContent = "Signed in successfully!";
            setTimeout(() => {
                window.location.href = "index.html"; // Redirect to courses
            }, 1500);
        })
        .catch(error => {
            authMessage.textContent = "Error: " + error.message;
        });
});

// Sign Out
signOutButton.addEventListener("click", () => {
    auth.signOut()
        .then(() => {
            authMessage.textContent = "Signed out successfully!";
            signOutButton.style.display = "none";
        })
        .catch(error => {
            authMessage.textContent = "Error: " + error.message;
        });
});

// Check Authentication State
auth.onAuthStateChanged(user => {
    if (user) {
        authMessage.textContent = `Logged in as ${user.email}`;
        signOutButton.style.display = "block";
    } else {
        authMessage.textContent = "Not logged in.";
        signOutButton.style.display = "none";
    }
});
