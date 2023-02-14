
import { callMovieList, searchMovieList } from "@/api";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 10,
    searchWord: "",
    searchList: [],
    movieInfo: "",
  },
  getters: {
    getMovieList(state) {
      return state.searchList;
    },
    getSearchTxt(state) {
      return state.searchWord;
    },
    getMovieInfo(state) {
      return state.movieCd;
    },
  },
  actions: {
    callMovie(context, year) {
      console.log("actions movie");
      callMovieList(parseInt(year + "0101")).then((result) => {
        console.log(result);
        let arr = result.data.boxOfficeResult.dailyBoxOfficeList;

        arr.forEach((item, idx) => {
					//item.image = "../assets/" + year + "_0" + idx + '.png';
					item.image = `./${year}_0${(idx+1)%5}.png`;
        });

        context.commit("setMovieList", arr);
      });
    },
    callNaverMovie(context, word) {
      console.log("actinos naver", word);
      searchMovieList()
        .get("/v1/search/movie.json?query=" + word)
        .then((result) => {
					console.log(result.data);
					let sendData = {
						'word': word,
						'data': result.data.items
					}
          context.commit("setMovieList", sendData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mutations: {
    /* eslint-disable */
    setMovieList(state, value) {
			console.log("mutations", value);
			
			if (value.word) {
				state.searchList = value.data;
				state.searchWord = value.word;
			} else {
				state.searchList = value;
			}

      //state.searchWord = value.word;
    },
  },
});