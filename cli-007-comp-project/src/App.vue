<template>
    <div class="container">
        <app-header 
            v-bind:quoteCount="quotes.length"
            v-bind:maxQuotes="maxQuotes"></app-header>
        <app-new-quote 
            v-on:quoteAdded="quoteCreated"
            v-bind:quoteCount="quotes.length"
            v-bind:maxQuotes="maxQuotes"
            ></app-new-quote>
        <app-quote-grid 
            v-bind:quotes="quotes" 
            v-on:quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="col-sm-12 text-center" >
            <div class="alert alert-info">
                Info: Click on a quote to delete it!
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

    export default {
        data() {
            return {
                quotes: [
                    'First quote!'
                ],
                maxQuotes: 10,
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header,
        },

        methods: {
            quoteCreated(quote) {
                console.log("app vue, received quote: " + quote);
                this.quotes.push(quote)
            },
            deleteQuote(index) {
                console.log("app vue, quote deleted, index: " + index);
                this.quotes.splice(index, 1);
            }
        },
    }
</script>

<style>
</style>
