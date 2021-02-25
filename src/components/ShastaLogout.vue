<template>
    <button @click="logout">Logout</button>
</template>

<script>
import firebase from '../utilities/firebase'

export default {
    data() {
        return {

        }
    },
    methods: {
        logout() {
            firebase.auth().signOut(); // Damit der User ausgeloggt wird
            location.reload() // Damit der User wieder zum Login kommt
        }
    },
    
}
</script>

<style scoped>
    button {
        padding: 5px;
    }
</style>