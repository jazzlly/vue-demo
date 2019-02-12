<template>
  <div class="container">
    <div class="row">
      
      <!-- 使用slot将parent componet的内容传递到child component中 -->
      <!-- 内容通过parent传入，但是style还是child comp的style -->
      <app-quote>
        <!-- 命名slot -->
        <h2 slot="title">{{ quoteTitle }}</h2>
        <p slot="content">A wonderful quote!</p>
        <!-- default slot -->
        <p>Content in default slot!</p>
      </app-quote>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";

export default {
  data() {
    return {
      quoteTitle: "The quote",
      selectedComponent: "appQuote"
    };
  },

  components: {
    appQuote: Quote,
  }
};
</script>

<style>
</style>
