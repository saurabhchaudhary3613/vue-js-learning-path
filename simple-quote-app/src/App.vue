<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuote="maxQuote"></app-header>
        <new-quote @quoteAdded="newQuote"></new-quote>
        <app-quote-grid :quotes="quotes" @quoteDelete="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="alert alert-info">
                Info: click on Quote to delete it !
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';

    export default {
        data: function() {
            return {
                quotes: [
                    'A first quote to see something !'
                ],
                maxQuote: 10
            } 
        },
        components: {
            appQuoteGrid : QuoteGrid,
            newQuote: NewQuote,
            appHeader: Header
        },
        methods: {
            newQuote(quote) {
                if(this.quotes.length >= this.maxQuote) {
                    alert('please delete quote first to add a new quote !')
                } else {
                    this.quotes.push(quote);
                }
                
            },
            deleteQuote(index) {
                console.log('index in App vue', index);
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
