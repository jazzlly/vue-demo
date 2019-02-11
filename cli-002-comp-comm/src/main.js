import Vue from 'vue'
import App from './App.vue'

// eventBus必须放在Root Vue对象之前
// todo: vuex 是更好
export const eventBus = new Vue({
  data() {
    return {
      age: 0,
    }
  },
  methods: {
    changeAge(age) {
      console.log("event bus, age changed: " + age);
      this.age = age
      this.$emit('ageChanged', age)
    }
  },
})

new Vue({
  el: '#app',
  render: h => h(App)
})
