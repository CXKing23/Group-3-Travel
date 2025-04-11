import './styles.css';
import React, { useState, useEffect } from 'react';
import { auth, database } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { ref, set } from 'firebase/database';

const Sign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authMessage, setAuthMessage] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user info to Realtime Database
      await set(ref(database, 'users/' + user.uid), {
        email,
        createdAt: new Date().toISOString(),
      });

      setAuthMessage('Account created successfully!');
    } catch (error) {
      setAuthMessage('Error: ' + error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAuthMessage('Signed in successfully!');
      setTimeout(() => {
        window.location.href = '/'; // Redirect to homepage
      }, 1500);
    } catch (error) {
      setAuthMessage('Error: ' + error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthMessage(`Logged in as ${user.email}`);
      } else {
        setAuthMessage('Not logged in.');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {/* Header */}
      <header id="main-header">
        <h1>Travel Adventure</h1>
      </header>

      {/* Auth Section */}
      <div className="auth-container">
        <h2>Sign In or Sign Up</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignUp}>Sign Up</button>
        <p>{authMessage}</p>
      </div>
    </div>
  );
};

export default Sign;
