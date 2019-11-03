import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyAG7ir79kBXO5qKzLDBFUDwiMkjjgIAj5o",
    authDomain: "mass-counter.firebaseapp.com",
    databaseURL: "https://mass-counter.firebaseio.com",
    projectId: "mass-counter",
    storageBucket: "",
    messagingSenderId: "650898593285",
    appId: "1:650898593285:web:8ad43e3419ca9c7c"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
}

export default firebase.firestore();
