// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjE1sARIIfx-TVOVWad28xaVE-bfUbEG0",
  authDomain: "java-watch-shop.firebaseapp.com",
  projectId: "java-watch-shop",
  storageBucket: "java-watch-shop.appspot.com",
  messagingSenderId: "585623520781",
  appId: "1:585623520781:web:b1dee8ec41a6154fd1b744",
  measurementId: "G-8W0NLG6BHL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
