<template>
    <button class="logout" @click="logout">Logout</button>
</template>

<script>
import firebase from "./firebase"

export default {
    data() {
        return {

        }
    },
    methods: {
        logout() {
            firebase.auth().signOut() // Damit der User ausgeloggt wird
            this.$emit( 'loggedOut' )
            // location.reload() // Damit der User wieder zum Login kommt
        }
    },
    
}
</script>

<style scoped>
    
</style>