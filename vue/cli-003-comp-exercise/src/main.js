import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    sendServerInfo(server) {
      console.log("main.js sendServerInfo: " + server);
      this.$emit("sendServerInfo", server)
    }
  },
})

new Vue({
  el: '#app',
  render: h => h(App)
})
