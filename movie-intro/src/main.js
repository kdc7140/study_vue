import App from "./App.vue";
import Vue from "vue";
import { router } from "./router/index.js";
import common from './common/common.util.js';
import { callMovieList, searchMovieList } from './api/index.js';
import vuex from "vuex";
import { store }  from "@/store/store.js"

Vue.config.productionTip = false;

//import { createApp } from 'vue';

//import CKEditor from "@ckeditor/ckeditor5-vue";




//createApp(App)
//    .use(router)
//    .use(common)
//    .use(api)
//    .use(vuex)
//    .use(store)
//    .mount("#app");

//.use(CKEditor)



new Vue({
    render: (h) => h(App),
    router,
    common,
    callMovieList,
    searchMovieList,
    vuex,
    store,
}).$mount("#app");
