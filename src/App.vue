<template>
    <h1>Heroes <small>{{ heroesCount }}</small></h1>
    <ul>
        <li v-for="(hero, index) in heroes" v-bind:key="hero.name">
            <div>
                {{ hero.name }}
                <button @click="removeHero( index )" >X</button>
            </div>
        </li>
    </ul>
    <input type="text" v-model.trim="newHero">
    <button v-on:click="addHero">Add Hero</button>
</template>

<script>
    export default {
        data() {
            return {
                title: "<h1>Jetzt bin ich da</h1>",
                newHero: 'Aquaman',
                heroes: [
                    { name: 'Superman' },
                    { name: 'Batman' },
                    { name: 'Flash' },
                    { name: 'Arrow' },
                ],
                isShowing: true
            }
        },
        methods: {
            addHero: function() { 
                if( this.newHero != '' ) {
                    this.heroes.push({name: this.newHero})
                    this.newHero = ''
                }
            },
            removeHero: function( index ) {
                this.heroes = this.heroes.filter( ( hero, i ) => i != index )
            }
        },
        computed: {
            heroesCount() {
                return this.heroes.length;
            }
        }
    }
</script>