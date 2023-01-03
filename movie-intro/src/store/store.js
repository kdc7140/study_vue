// store/index.js
import { createStore } from "vuex";

export default createStore({
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
    mutations: {
        setCounter(state, value) {
            console.log("mutations", state, value);
            state.counter = value;
        },
        movieSearch() {
            console.log('storeCall');
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
