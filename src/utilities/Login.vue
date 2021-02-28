<template>
    <div
        id="firebaseui-auth-container"
        class="login-wrapper">
    </div>
    <button @click="logUser" style="display: inline; border: 1px solid black; padding: 5px;">logUser</button>
    <button @click="updateUser" style="display: inline; border: 1px solid black; padding: 5px;">updateUser</button>
</template>

<script>
    import firebase from "./firebase"
    import "firebase/auth"
    import * as firebaseui from "firebaseui"

    export default {
        props: {
            user: { // Hierdrin werden Userdaten gespeichert, für den Login
                type: Object,
                required: true
            }
        },
        data() {
            return {
                newUser: {},
                uiConfig: {
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
            }
        },
        methods: {
            logUser() {
                console.log(this.user)
            },
            updateUser() {
                this.$emit( 'update:user', this.newUser )
            }
        },
        mounted() {
            firebase.auth().onAuthStateChanged( function( res ) {
                if ( res ) {
                    res.getIdToken()
                        .then( function( accessToken ) {
                            this.newUser = { accessToken: accessToken, uid: res.uid }
                            //this.updateUser()
                            this.$emit( 'update:user', this.newUser )
                        }
                    );
                } else {
                    // Initialize the FirebaseUI Widget using Firebase.
                    const ui = new firebaseui.auth.AuthUI( firebase.auth() );
                    // User is signed out.
                    // The start method will wait until the DOM is loaded.
                    ui.start(
                        '#firebaseui-auth-container', 
                        /*this.uiConfig*/
                        {
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
                    });
                }
            }, function(error) {
                console.log(error);
            });
        }
    }
</script>

<style>
    @import '../../node_modules/firebaseui/dist/firebaseui.css';
</style>