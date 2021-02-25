<template>

    <ShastaHeader v-if="loggedIn" />
    <ShastaLogin v-if="!loggedIn" />
    <router-view v-if="loggedIn"/>
    <ShastaFooter v-if="loggedIn" />

</template>

<script>
    import ShastaHeader from "./components/ShastaHeader"
    import ShastaFooter from "./components/ShastaFooter"

    import ShastaLogin from "./components/ShastaLogin"

    // Für User Authentication
    import firebase from './utilities/firebase'

    export default {
        components: {
            ShastaHeader,
            ShastaFooter,
            ShastaLogin
        },
        data() {
            return {
                loggedIn: true,
                user: {}
            }
        },
        methods: {},
        computed: {},
        mounted() {
            firebase.auth().onAuthStateChanged( user => {
                if ( user ) {
                    var displayName = user.displayName;
                    var email = user.email;
                    var emailVerified = user.emailVerified;
                    var photoURL = user.photoURL;
                    var uid = user.uid;
                    var phoneNumber = user.phoneNumber;
                    var providerData = user.providerData;
                    user.getIdToken()
                        .then( () => {
                            console.log(
                                JSON.stringify({
                                    displayName: displayName,
                                    email: email,
                                    emailVerified: emailVerified,
                                    phoneNumber: phoneNumber,
                                    photoURL: photoURL,
                                    uid: uid,
                                    providerData: providerData
                                }, null, '  ')
                            );
                        });
                    this.user = user
                    this.loggedIn = true
                } else {
                    this.loggedIn = false;
                }
            }, function(error) {
                console.log(error);
            });
        }
    }
</script>

<style>
    
</style>