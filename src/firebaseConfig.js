// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_WNXVgB5v7Myho8qMDl6bXn90ePw2MIY",
  authDomain: "fir-project-a1acc.firebaseapp.com",
  projectId: "fir-project-a1acc",
  storageBucket: "fir-project-a1acc.appspot.com",
  messagingSenderId: "569961339336",
  appId: "1:569961339336:web:f33e6ed6aef0eb2dd8c8fd",
  measurementId: "G-G3B6NJ3Z76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
