<template>
    <div
        id="firebaseui-auth-container"
        class="login-wrapper">
    </div>
    <button @click="$emit('logInUser', { uid: 'tewst', accessToken: 'testestste' })" style="display: inline; border: 1px solid black; padding: 5px;">Klick</button>
</template>

<script>
    // import * as firebaseui from "firebaseui"
    // import firebase from "./firebase"

    export default {
        props: {
            user: { // Hierdrin werden Userdaten gespeichert, für den Login
                type: Object,
                required: true
            }
        },
        emits: {
            logInUser: payload => { 
                return !!payload
            }
        },
        // data() {
        //     return {
        //         user: {},
        //         uiConfig: {
        //             signInSuccessUrl: 'http://localhost:8080/#/',
        //             // signInSuccessUrl: 'https://shasta-b28e4.web.app/',
        //             signInOptions: [
        //                 firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //                 firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //                 firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        //             ],
        //             tosUrl: 'http://localhost:8080/#/agb',
        //             // tosUrl: 'https://shasta-b28e4.web.app/#agb',
        //             privacyPolicyUrl: function() {
        //                 window.location.assign('http://localhost:8080/#/datenschutz');
        //                 // window.location.assign('https://shasta-b28e4.web.app/#datenschutz');
        //             }
        //         }
        //     }
        // },
        // methods: {},
        // mounted() {
        //     firebase.auth().onAuthStateChanged( function( res ) {
        //         if ( res ) {
        //             res.getIdToken()
        //                 .then( function( accessToken ) {
        //                     this.user = { accessToken: accessToken, uid: res.uid }
        //                     // this.$emit( 'logInUser', this.user )
        //                 }
        //             );
        //         } else {
        //             new firebaseui.auth.AuthUI( firebase.auth() ) // Initialize firebaseui
        //                 .start( '#firebaseui-auth-container', this.uiConfig ); // render firebaseui
        //         }
        //     }, function(error) {
        //         console.log(error);
        //     });
        // }
    }
</script>

<style>
    @import '../../node_modules/firebaseui/dist/firebaseui.css';
</style>