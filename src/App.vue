<template>

    <LoadSpinner v-if="!isRendered" />

    <Login :user="user"/>

    <Logout v-if="isLoggedIn" />
    <div
        @logInUser="logInUser"
    ><!--Vue Event Handler--></div>
    <!--Basicly die Root-->
    <div class="layout-wrapper" 
        v-if="isLoggedIn && isRendered"
    >
        <LayoutSidebar />
        <div class="layout-content-wrapper">
            <LayoutContentHeader />
            <!--LayoutContent--><router-view class="layout-content" />
            <LayoutContentFooter />
        </div>
    </div>

</template>

<script>
    // Utilites
    import LoadSpinner from "./utilities/LoadSpinner"
    import Login from "./utilities/Login"
    import Logout from "./utilities/Logout"

    // Layout
    import LayoutSidebar from "./components/LayoutSidebar"
    import LayoutContentHeader from "./components/LayoutContentHeader"
    import LayoutContentFooter from "./components/LayoutContentFooter"

    // PrimeVue

    export default {
        components: {
            // Utilities
            LoadSpinner,
            Login,
            Logout,
            // Layout
            LayoutSidebar,
            LayoutContentHeader,
            LayoutContentFooter,
            // PrimeVue
        },
        data() {
            return {
                isRendered: true,
                isLoggedIn: false,
                user: {}
            }
        },
        methods: {
            logInUser() {
                console.log(`LogInEvent`)
            }
        },
        computed: {},
        mounted() {}
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