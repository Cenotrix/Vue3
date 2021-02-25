<template>
    <div id="firebaseui-auth-container" class="login-wrapper"></div>
</template>

<script>
    import * as firebaseui from "firebaseui"
    import firebase from "../utilities/firebase"

    export default {
        data() {
            return {
                ui: new firebaseui.auth.AuthUI( firebase.auth() ),
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
            initLogin() {
                this.ui.start( "#firebaseui-auth-container", this.uiConfig );
            }
        },
        mounted() {
            this.initLogin()
        }
    }
</script>

<style>
    @import '../../node_modules/firebaseui/dist/firebaseui.css';
</style>