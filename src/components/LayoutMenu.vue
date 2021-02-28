<template>

    <ul class="layout-menu">


        <li>
            <router-link :class="link" :to="'/'"><i class="logo pi pi-dollar"></i>hasta</router-link>
        </li>

        <li v-for=" (route, index) in menu" :key="index">
            <router-link :class="link" :to="{ name: route.name }"><i :class="route.icon"></i> {{ route.name }}</router-link>
        </li>

    </ul>

</template>

<script>
    import routes from "../router/routes"

    export default {
        components: {

        },
        data() {
            return {
                menu: routes
            }
        },
    }
</script>

<style scoped>
    ul {
        grid-area: 'sidebar';
        margin: 0;
        padding: 0;
    }
    li {
        margin: 15px 0;
        list-style: none;
    }
    a {
        padding: 5px;
        color: var(--font-color);
        text-decoration: none;
    }
</style>