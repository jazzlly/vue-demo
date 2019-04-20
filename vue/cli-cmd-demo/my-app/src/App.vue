<template>
  <div id="app">
    <demo-component msg="Demo Vue Component!"/>

    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello Vue!"/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DemoComponent from './components/DemoComponent.vue'
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    DemoComponent,
    TodoItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
