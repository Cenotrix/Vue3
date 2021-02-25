<template>
    <nav class="ShastaNav">
        <ul>
            <li>
                <router-link :class="link" :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li>
                <router-link :class="link" :to="{ name: 'About' }">About</router-link>
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

<style scoped>
    nav {
        display: flex;
    }
    ul {
        display: flex;
        flex-direction: row;
    }
    li {
        margin: 5px 15px;
        list-style: none;
    }
    a {
        padding: 5px;
        border-radius: 7px;
        border: 1px solid #fff;
    }
</style>