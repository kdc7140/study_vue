
import { callMovieList, searchMovieList } from "@/api";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 10,
        searchWord: "",
        searchList: [],
        movieInfo : "",
    },
    getters: {
        getMovieList(state) {
            return state.searchList;
        },
        searchTxt(state) {
            return state.searchWord;
        },
        getMovieInfo(state) {
            return state.movieCd;
        }
    },
    actions: {
        callMovie(context) {
            console.log("actions movie");
            callMovieList().then((result) => {
                console.log(result);
                context.commit(
                    "setMovieList",
                    result.data.boxOfficeResult.dailyBoxOfficeList
                );
            });
        },
        callNaverMovie(context, word) {
            console.log("actinos naver", word);
            searchMovieList()
                .get("/v1/search/movie.json?query=" + word)
                .then((result) => {
                    console.log(result.data);
                    context.commit("setMovieList", result.data.items);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

    },
    mutations: {
        setMovieList(state, value) {
            console.log("mutations", value);
            state.searchList = value;
            //state.searchWord = value.word;
            
        },
    },
});