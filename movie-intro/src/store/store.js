import Vue from "vue";
import { defineStore } from "pinia";

Vue.use(Vue);

export const searchMovieList = defineStore("list", {
    state: () => ({
        searchList: [],
    }),
    actions: {
        searchMovie(param) {
            this.searchList.push(param);
        },
        //addList: (param) => this.list.push(param);
    },
    getters: {
        getAllList(state) {
            return state.list;
        },
        //getAllList: (state) => state.list
    },
});