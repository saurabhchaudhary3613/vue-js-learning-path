import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import axios from 'axios'

axios.defaults.baseURL = 'https://vuejs-axios-609af.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'sfssds';
axios.defaults.headers.get['Accepts'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptors', config);
  return config;
});

const resInterceptor = axios.interceptors.response.use( res => {
  console.log('Response Interceptors', res);
  return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.request.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
