<template>
    <nav>
        <ul>
            <li>
                <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'About' }">About</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        components: {

        },
        data() {
            return {

            }
        },
        methods: {

        },
        computed: {

        },
    }
</script>

<style>

</style>