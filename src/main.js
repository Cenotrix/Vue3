import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import "./assets/style.css"

// PrimeVue
import PrimeVue from 'primevue/config'
import "primevue/resources/themes/vela-green/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

// Firebase
import firebase from "./utilities/firebase";
import "firebase/auth";
///// User Authentication /////
import * as firebaseui from 'firebaseui'
import "../node_modules/firebaseui/dist/firebaseui.css"

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

firebase.auth().onAuthStateChanged(function(res) {
    if ( res ) {
        var displayName = res.displayName;
        var email = res.email;
        var emailVerified = res.emailVerified;
        var photoURL = res.photoURL;
        var uid = res.uid;
        var phoneNumber = res.phoneNumber;
        var providerData = res.providerData;
        var user = {}
        res.getIdToken()
            .then(function( accessToken ) {
                user = {
                    displayName: displayName,
                    email: email,
                    emailVerified: emailVerified,
                    phoneNumber: phoneNumber,
                    photoURL: photoURL,
                    uid: uid,
                    accessToken: accessToken,
                    providerData: providerData
                }
            })
            .then( function() {
                // Vue App wird nach Login erschaffen
                if ( App ) {
                    const app = createApp( App )
                    app.config.globalProperties.user = user
                    app.use(router)
                    app.use(PrimeVue, { ripple: true })
                    app.mount('#app')
                }
            })
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