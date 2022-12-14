import { fetchNewsList } from '../api/index.js';
import { fetchJobsList } from '../api/index.js';
import { fetchAskList  } from '../api/index.js';
import { fetchUserInfo } from '../api/index.js';
import { fetchItemInfo } from '../api/index.js';
import { fetchList } from "../api/index.js";


export default{
    FETCH_NEWS(context){
        return fetchNewsList()
            .then((response) => {
                console.log(1);
                console.log(response.data);
                context.commit("SET_NEWS", response.data);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    FETCH_JOBS({commit}){
        return fetchJobsList()
            .then(({ data }) => {
                console.log(data);
                commit("SET_JOBS", data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    FETCH_ASK({commit}){
        return fetchAskList()
            .then(({ data }) => {
                console.log(data);
                commit("SET_ASK", data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    FETCH_USER({commit}, name){
        return fetchUserInfo(name)
            .then(({ data }) => {
                console.log(data);
                commit("SET_USER", data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    FETCH_ITEM({ commit }, id) {
        return fetchItemInfo(id)
            .then(({ data }) => {
                commit("SET_ITEM", data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(({ response }) => {
                console.log(4);
                commit('SET_LIST', response);
                return response;
            })
            .catch(error => console.log(error));
    }

}