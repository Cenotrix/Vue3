import firebase from "./firebase";
import "firebase/auth";
///// User Authentication /////
import * as firebaseui from 'firebaseui'


const uiConfig = { // Single Page App
    // signInSuccessUrl: 'https://shasta-b28e4.web.app/',
    signInSuccessUrl: 'http://localhost:8080/#/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    // tosUrl: 'https://shasta-b28e4.web.app/#agb',
    tosUrl: 'http://localhost:8080/#/agb',
    privacyPolicyUrl: function() {
        // window.location.assign('https://shasta-b28e4.web.app/#datenschutz');
        window.location.assign('http://localhost:8080/#/datenschutz');
    }
}

// Tracking Auth State
export function initAuth() {
    firebase.auth().onAuthStateChanged(function(user) {
        if ( user ) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            user.getIdToken().then(function(accessToken) {
                console.log(JSON.stringify({
                    displayName: displayName,
                    email: email,
                    emailVerified: emailVerified,
                    phoneNumber: phoneNumber,
                    photoURL: photoURL,
                    uid: uid,
                    accessToken: accessToken,
                    providerData: providerData
                }, null, '  '));
            });
        } else {
            // Initialize the FirebaseUI Widget using Firebase.
            const ui = new firebaseui.auth.AuthUI( firebase.auth() );
            // User is signed out.
            // The start method will wait until the DOM is loaded.
            ui.start('#app', uiConfig);
        }
    }, function(error) {
        console.log(error);
    });
}