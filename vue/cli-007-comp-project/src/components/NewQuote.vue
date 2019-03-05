<template>
  <div class="row">
    <form action>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Quote</label>
        <textarea class="form-control" rows="3" v-model="quote"></textarea>
      </div>

      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
          <button class="btn btn-primary" @click.prevent="createNewQuote()">Add Quote</button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
    props: ['quoteCount', 'maxQuotes'],

    data() {
        return {
            quote: ''
        }
    },

    methods: {
        createNewQuote() {
            console.log("new quote submitted: " + this.quote + ", quote count: " + this.quoteCount);
            if (this.quoteCount >= this.maxQuotes) {
                return alert("Please delete quotes first!")
            }
            this.$emit("quoteAdded", this.quote)
            this.quote = ''
        }
    },
};
</script>

<style scoped>
</style>
