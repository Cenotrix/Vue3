<template>
    
    <Calendar v-model="date" :inline="true" />
    <div class="p-shadow-1">
        Depot: 14552,03€
    </div>

</template>

<script>
    import Calendar from 'primevue/calendar';

    export default {
        components: {
            Calendar,
        },
        data() {
            return {
                date: new Date()
            }
        },
        methods: {}
    }
</script>

<style>

</style>