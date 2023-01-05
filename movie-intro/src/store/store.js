// store/index.js
//import { createStore } from "vuex";

//export default createStore({
//    state: {
//        counter: 10,
//        searchWord: "",
//        searchList: [],
//    },
//    getters: {
//        time2(state) {
//            console.log("getters", state);
//            return state.counter * 2;
//        },
//    },
//    mutations: {
//        setCounter(state, value) {
//            console.log("mutations", state, value);
//            state.counter = value;
//        },
//        movieSearch() {
//            console.log('storeCall');
//            this.$searchMovieList()
//                .get("/v1/search/movie.json?query=" + this.searchWord)
//                .then((result) => {
//                    console.log(result.data);
//                    this.movieList = result.data.items;
//                })
//                .catch((error) => {
//                    console.log(error);
//                });
//        },
//    },
//});


import { callMovieList } from "@/api";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 10,
        searchWord: "",
        searchList: [],
    },
    getters: {
        time2(state) {
            console.log("getters", state);
            return state.counter * 2;
        },
    },
    actions: {
        callMovie(context) {
            callMovieList().then((result) => {
                console.log(result);
                context.commit("setMovieList", result.data.boxOfficeResult.dailyBoxOfficeList);
            });
        },
    },
    mutations: {
        setMovieList(state, data) {
            console.log("mutations");
            state.searchList = data;
        },
        setCounter(state, value) {
            console.log("mutations", state, value);
            state.counter = value;
        },
        movieSearch() {
            console.log("storeCall");
            this.$searchMovieList()
                .get("/v1/search/movie.json?query=" + this.searchWord)
                .then((result) => {
                    console.log(result.data);
                    this.movieList = result.data.items;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
});