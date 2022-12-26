import App from "./App.vue";
//import Vue from "vue";
import router from "./router/index.js";
import common from './common/common.util.js';

import { createApp } from 'vue';

createApp(App).use(router).use(common).mount("#app");

//new Vue({
//    render: (h) => h(App),
//    router,
//}).$mount("#app");
