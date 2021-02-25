<template>

    <header class="ShastaHeader">
        <ShastaLogo />
        <ShastaNav />
        <ShastaLogout />
    </header>

</template>

<script>
import ShastaLogo from "./ShastaLogo"
import ShastaNav from "./ShastaNav"
import ShastaLogout from "./ShastaLogout"

export default {
    components: {
        ShastaLogo,
        ShastaNav,
        ShastaLogout,
    }
}
</script>

<style>

</style>