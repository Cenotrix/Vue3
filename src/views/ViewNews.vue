<template>

    <div class="view-content">

        <Card v-for="(card, index) in news" :key="index">
            <template #title v-if="card.title">
                {{ card.title }}
            </template>
            <template #content>
                {{ card.content }}
            </template>
            <template #footer>
                <router-link :to="card.link"><Button label="Mehr lesen" /></router-link>
            </template>
        </Card>

    </div>

</template>

<script>
    import Card from 'primevue/card';
    import Button from 'primevue/button';

    export default {
        components: {
            Card,
            Button
        },
        data() {
            return {
                news: [
                    { title: 'Test', content: 'Langer Inhalt und so, hier stehen dann 25 Wörter aus den Patch Notes', link: 'https://localhost:8080/news' },
                    { title: 'Test', content: 'Langer Inhalt und so, hier stehen dann 25 Wörter aus den Patch Notes', link: 'https://localhost:8080/news' },
                ]
            }
        },
        beforeMount() {
            // Fetch news
            // .collection("news")
            // .orderBy("created", "desc")

        }
    }
</script>

<style scoped>
    .view-content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 15px;
        padding: 15px;
    }
</style>