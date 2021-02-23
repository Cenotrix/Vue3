<template>

    <ShastaNav />
    <ShastaLogin />
    <router-view />

</template>

<script>
    import ShastaNav from "./components/ShastaNav"
    import ShastaLogin from "./components/ShastaLogin"

    // Für User Authentication
    import firebase from './utilities/firebase'
    import * as firebaseui from 'firebaseui'

    export default {
        components: {
            ShastaNav,
            ShastaLogin
        },
        data() {
            return {}
        },
        mounted() {
            const auth = firebase.auth();
            
            // Start MOVE
            // Move to ./components/ShastaLogoutBtn
            const logout = document.querySelector( "#logout" ) // Alt, jetzt mit mehreren Logout Buttons
            logout.onclick = () => { auth.signOut() } // Alt, jetzt mit mehreren Logout Buttons
            // End MOVE

            // Start MOVE
            // Start REFACTOR else
            const uiConfig = { // Single Page App
                signInSuccessUrl: 'http://localhost:8080/#/',
                // signInSuccessUrl: 'https://shasta-b28e4.web.app/',
                signInOptions: [
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
                ],
                tosUrl: 'http://localhost:8080/#/agb',
                // tosUrl: 'https://shasta-b28e4.web.app/#agb',
                privacyPolicyUrl: function() {
                    window.location.assign('http://localhost:8080/#/datenschutz');
                    // window.location.assign('https://shasta-b28e4.web.app/#datenschutz');
                }
            }
            // End MOVE
            // Tracking Auth State
            const initApp = function() {
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
                            document.getElementById('account-details').textContent = JSON.stringify({
                                displayName: displayName,
                                email: email,
                                emailVerified: emailVerified,
                                phoneNumber: phoneNumber,
                                photoURL: photoURL,
                                uid: uid,
                                accessToken: accessToken,
                                providerData: providerData
                            }, null, '  ');
                        });
                    } else {
                        // Initialize the FirebaseUI Widget using Firebase.
                        const ui = new firebaseui.auth.AuthUI( firebase.auth() );
                        // User is signed out.
                        // The start method will wait until the DOM is loaded.
                        ui.start('#firebaseui-auth-container', uiConfig);
                    }
                }, function(error) {
                    console.log(error);
                });
            };

            window.addEventListener('load', function() {
                initApp()
            });
        },
        methods: {},
        computed: {}
    }
</script>

<style>
    @import '../node_modules/firebaseui/dist/firebaseui.css';
</style>