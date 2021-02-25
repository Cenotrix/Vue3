<template>

    <div v-if="!rendered">
        <ShastaRenderLoader />
    </div>

    <div v-if="!loggedIn && rendered">
        <ShastaLogin />
    </div>
    
    <div class="layout-wrapper" v-if="loggedIn && rendered">
        <ShastaSidebar />
        <div class="layout-content-wrapper">
            <ShastaTopbar />
            <router-view />
            <ShastaFooter />
        </div>
    </div>

</template>

<script>
    import ShastaRenderLoader from "./components/ShastaRenderLoader"
    import ShastaSidebar from "./components/ShastaSidebar"
    import ShastaLogin from "./components/ShastaLogin"
    import ShastaTopbar from "./components/ShastaTopbar"
    import ShastaFooter from "./components/ShastaFooter"

    // Für User Authentication
    import firebase from "./utilities/firebase"

    export default {
        components: {
            ShastaRenderLoader,
            ShastaLogin,
            ShastaSidebar,
            ShastaTopbar,
            ShastaFooter
        },
        data() {
            return {
                rendered: false,
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
                    this.rendered = true
                } else {
                    this.loggedIn = false;
                    this.rendered = true
                }
            }, function(error) {
                console.log(error);
            });
        }
    }
</script>

<style>
    .layout-wrapper {
        min-height: 100vh;
        display: flex;
    }

    .layout-content-wrapper {
        width: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .layout-sidebar {
        width: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>