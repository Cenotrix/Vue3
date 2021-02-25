<template>

    <div v-if="!render">
        <ShastaRenderLoader />
    </div>

    <div v-if="!loggedIn && render">
        <ShastaLogin />
    </div>
    
    <div v-if="loggedIn && render">
        <ShastaHeader />
        <router-view />
        <ShastaFooter />
    </div>

</template>

<script>
    import ShastaRenderLoader from "./components/ShastaRenderLoader"
    import ShastaHeader from "./components/ShastaHeader"
    import ShastaFooter from "./components/ShastaFooter"
    import ShastaLogin from "./components/ShastaLogin"

    // Für User Authentication
    import firebase from "./utilities/firebase"

    export default {
        components: {
            ShastaRenderLoader,
            ShastaHeader,
            ShastaFooter,
            ShastaLogin
        },
        data() {
            return {
                render: false,
                loggedIn: false,
                user: {}
            }
        },
        methods: {},
        computed: {},
        mounted() { // User Auth
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
                    this.render = true
                } else {
                    this.loggedIn = false;
                    this.render = true
                }
            }, function(error) {
                console.log(error);
            });
        }
    }
</script>

<style>

</style>