// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDi_pDzrvRsY73L3eaD05qbsWGV-m54neU",
    authDomain: "shasta-b28e4.firebaseapp.com",
    databaseURL: "https://shasta-b28e4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shasta-b28e4",
    storageBucket: "shasta-b28e4.appspot.com",
    messagingSenderId: "430970252552",
    appId: "1:430970252552:web:daeeabc2cc90aef4c450bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;