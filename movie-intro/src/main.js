import App from "./App.vue";
//import Vue from "vue";
import router from "./router/index.js";

import { createApp } from 'vue';

createApp(App).use(router).mount("#app");

//new Vue({
//    render: (h) => h(App),
//    router,
//}).$mount("#app");
