import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store.js'

Vue.config.productionTip = false

new Vue({
  el : '#kdc',
  store,
  render: h => h(App),
});