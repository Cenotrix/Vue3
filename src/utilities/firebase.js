// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDi_pDzrvRsY73L3eaD05qbsWGV-m54neU",
    authDomain: "shasta-b28e4.firebaseapp.com",
    projectId: "shasta-b28e4",
    storageBucket: "shasta-b28e4.appspot.com",
    messagingSenderId: "430970252552",
    appId: "1:430970252552:web:daeeabc2cc90aef4c450bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;