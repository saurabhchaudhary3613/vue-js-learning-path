<template>
    <div class="row">
        <app-quote v-for="(quote, i) in quotes" v-bind:key="i" @click.native="deleteQuote(i)">{{ quote }}</app-quote>
    </div>
</template>
<script>
import Quote from './Quote.vue';

export default {
    props: ['quotes'],
    components: {
        appQuote : Quote
    },
    methods: {
        deleteQuote(index) {
            console.log('index in quote grid', index);
            this.$emit('quoteDelete', index);
        }
    } 
}
</script>

<style>

</style>


