import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import axios from 'axios';

// 全局的配置
axios.defaults.baseURL = 'http://localhost:8081'
axios.defaults.headers.common["Authorization"]='foobar'
axios.defaults.headers.get['headerForGet']='wah'

// 拦截特殊的请求
const reqInc = axios.interceptors.request.use((config) => {
  console.log("request interceptors: " + config)
  config.headers.post['headerForPost']='cool post'
  config.headers.get['headerForGet2']='cool get'
  return config 
})

// 拦截特殊的响应
const respInc = axios.interceptors.response.use((config) => {
  console.log("response interceptors: " + config)
  return config
})

// 取消拦截器
axios.interceptors.request.eject(reqInc);
axios.interceptors.response.eject(respInc);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
