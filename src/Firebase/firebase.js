import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDjE1sARIIfx-TVOVWad28xaVE-bfUbEG0",
  authDomain: "java-watch-shop.firebaseapp.com",
  projectId: "java-watch-shop",
  storageBucket: "java-watch-shop.appspot.com",
  messagingSenderId: "585623520781",
  appId: "1:585623520781:web:b1dee8ec41a6154fd1b744",
  measurementId: "G-8W0NLG6BHL",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
//sử dụng server local
// auth.useEmulator("http://localhost:9099");
// if (window.location.hostname === "localhost") {
//   db.useEmulator("localhost", "8080");
// }
////////////////////////////////////////////////////////////////
export { db, auth, storage };
export default firebase;
