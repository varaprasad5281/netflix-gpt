// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FIREBASE_KEY = process.env.REACT_APP_API_KEY_FIREBASE;
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "netflixgpt-f2f43.firebaseapp.com",
  projectId: "netflixgpt-f2f43",
  storageBucket: "netflixgpt-f2f43.firebasestorage.app",
  messagingSenderId: "392224120283",
  appId: "1:392224120283:web:36f50499489b36430f5bfe",
  measurementId: "G-FQ368RPL7J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
