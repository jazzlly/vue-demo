<template>
    <div class="row">

        <!-- click.native 表示点击子component的内容时，作出响应 -->
        <app-quote 
            v-for="(quote, index) in quotes" :key="index"
            @click.native="deleteQuote(index)">
            <p>{{ quote }}</p>
        </app-quote>
        
    </div>
</template>


<script>
import Quote from './Quote.vue';
export default {
    props: ["quotes"],
    components: {
        appQuote: Quote
    },
    methods: {
        deleteQuote(index) {
            // fixme: got warning by mutating a props owned by parent comp
            // this.quotes = this.quotes.splice(index, 1)
            this.$emit("quoteDeleted", index)
        }
    },
}
</script>

<style scoped>

</style>
