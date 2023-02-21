// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8zNrbyqW3UV1RjFQhXVSG19ELfA_eQZc",
  authDomain: "du-app-82fd3.firebaseapp.com",
  projectId: "du-app-82fd3",
  storageBucket: "du-app-82fd3.appspot.com",
  messagingSenderId: "307778602163",
  appId: "1:307778602163:web:8b7ab7f82271a3b534dcc6",
  measurementId: "G-HB3CD8QHQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)