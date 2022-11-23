import Vue from 'vue'
import App from './App.vue'
import { stor } from './store/store.js'

Vue.config.productionTip = false

new Vue({
  el : '#kdc',
  stor,
  render: h => h(App),
});