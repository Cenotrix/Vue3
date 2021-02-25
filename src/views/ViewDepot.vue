<template>
    
    <Calendar v-model="date" :inline="true" />
    <button @click="logDate">Log Date</button>
    <div class="p-shadow-1">
        Depot: 14552,03€
    </div>

</template>

<script>
    import Calendar from 'primevue/calendar';

    export default {
        components: {
            Calendar
        },
        data() {
            return {
                date: null
            }
        },
        methods: {
            logDate() {
                console.log(`${this.date}`)
            }
        }
    }
</script>

<style>

</style>