<template>
  <div class="container">
    <div class="row">
      <button @click="selectedComponent = 'appQuote'">Quote</button>
      <button @click="selectedComponent = 'appAuthor'">Author</button>
      <button @click="selectedComponent = 'appNew'">New</button>
      <hr>

      <!-- keep alive 避免了在切换component时，component自动销毁 -->
      <keep-alive>
        <component :is="selectedComponent">
          <p>Default Content!</p>
        </component>
      </keep-alive>
      <!-- 使用slot将parent componet的内容传递到child component中 -->
      <!-- 内容通过parent传入，但是style还是child comp的style -->
      <!-- <app-quote>
        <h2 slot="title">{{ quoteTitle }}</h2>
        <p slot="content">A wonderful quote!</p>
        <p>Content in default slot!</p>
      </app-quote>-->
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";

export default {
  data() {
    return {
      quoteTitle: "The quote",
      selectedComponent: "appQuote"
    };
  },

  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style>
</style>
