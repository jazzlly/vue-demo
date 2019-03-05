import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import { routes } from './routes';

Vue.use(VueRouter)
const router = new VueRouter({
  routes: routes,
  mode: "history",  // 访问url不用携带#
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
