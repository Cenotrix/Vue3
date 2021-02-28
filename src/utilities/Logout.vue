<template>
    <button class="logout" @click="logout">Logout</button>
</template>

<script>
    import firebase from "./firebase"
    import "firebase/auth"

    export default {
        methods: {
            logout() {
                firebase.auth().signOut() // Damit der User ausgeloggt wird
                location.reload() // Damit der User wieder zum Login kommt
            }
        },
        
    }
</script>

<style scoped>
    
</style>