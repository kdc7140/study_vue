// router/index.js
import { createWebHistory, createRouter } from "vue-router";

//import Vue from "vue";
//import VueRouter from "vue-router";
import MainPage from "../components/MainPage.vue";
import ListPage from "../components/ListPage.vue";

//Vue.use(VueRouter);

//export const router = new VueRouter({
//    mode: "history",
//    routes: [
//        {
//			path: "/",
//            redirect: "/main",
//		},
//		{
//			path: '/main',
//			component: MainPage,
//			name : 'main',
//		},
//        {
//            path: "/list",
//            component: ListPage,
//            name: "list",
//        },
//    ],
//});

const routes = [
    {
        path: "/",
        redirect: "/main",
    },
    {
        path: "/main",
        name: "main",
        component: MainPage,
    },
    {
        path: "/list",
        name: "list",
        component: ListPage,
    },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
