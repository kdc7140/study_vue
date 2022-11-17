import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        news : [],
        jobs : [],
        ask : [],
        user: {},
        item : [],
    },
    //computed와 동일한 속성이지만 store에 있음
    getters : {
        fetchedAsk(state){
            console.log(state);
            return state.ask;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations : mutations,  //export 한 mutatinos를 상단에 import하고 불러씀
    actions : actions
});