<template>
  <div id="app">
    <app-header />
    <app-axios-demo></app-axios-demo>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header/header.vue'
  import AxiosDemo from './components/axiosDemo.vue';
  export default {
    name: 'app',
    components: {
      'app-header': Header,
      'app-axios-demo': AxiosDemo,
    }
  }
</script>

<style>
  body, html {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>