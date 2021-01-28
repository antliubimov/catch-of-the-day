import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCN01vhu2Oyp0gVW6adqQKo_fP6e2Nr2x4",
  authDomain: "catch-of-the-day-antl.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-antl-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-antl",
  storageBucket: "catch-of-the-day-antl.appspot.com",
  messagingSenderId: "1032292484456",
  appId: "1:1032292484456:web:67ec7e6fda038a7fd082dd",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
