import App from "./App.vue";
//import Vue from "vue";
import router from "./router/index.js";
import common from './common/common.util.js';
import api from './api/index.js';
import { createPinia } from 'pinia';

import CKEditor from "@ckeditor/ckeditor5-vue";

import { createApp } from 'vue';


createApp(App)
    .use(router)
    .use(common)
    .use(api)
    .use(createPinia)
    .use(CKEditor)

    .mount("#app");

//new Vue({
//    render: (h) => h(App),
//    router,
//}).$mount("#app");
