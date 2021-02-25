<template>
    <router-link :to="{ name: 'Home' }"><img :src="imgSrc" alt="Logo"></router-link>
</template>

<script>
export default {
    data() {
        return {
            imgSrc: 'https://picsum.photos/50',
        }
    }
}
</script>

<style>

</style>