<template>

    <ShastaNav />
    <router-view />

</template>

<script>
    import ShastaNav from "./components/ShastaNav"

    export default {
        components: {
            ShastaNav
        },
        data() {
            return {}
        },
        methods: {},
        computed: {}
    }
</script>

<style>

</style>