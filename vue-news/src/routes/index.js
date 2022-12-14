import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from "../store/index.js";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/news",
        },
        {
            //path : url 주소
            path: "/news",
            //component : url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
            //component: createListView("NewsView"),
            name: "news",
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spiiner");
                store.dispatch("FETCH_LIST", to.name)
                    .then(() => {
                        console.log(5);
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                //console.log("to", to);
                //console.log("from", from);
                //console.log("next", next);
                
            },
        },
        {
            path: "/ask",
            //component: AskView,
            component: createListView("AskView"),
            name: "ask",
        },
        {
            path: "/jobs",
            component: JobsView,
            //component: createListView("JobsView"),
            name: "jobs",
        },
        {
            path: "/user/:id",
            component: UserView,
        },
        {
            path: "/item/:id",
            component: ItemView,
        },
    ],
});