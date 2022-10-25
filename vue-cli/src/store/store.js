import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'

import todoApp from './modules/todoApp'

Vue.use(Vuex);

// const storage = {
//     fetch(){
//         const arr = [];
//         if (localStorage.length > 0) {
//             for (var i = 0; i < localStorage.length; i++) {
//                 if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
//                     // this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                     console.log(localStorage.key(i));
//                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                 }
//             }
//         }
//         return arr;
//     },
// }

export const store = new Vuex.Store({
    modules : {
        todoApp : todoApp
    }
    // state : {
    //     headerText : "TO DO List!!",
    //     todoItems : storage.fetch()
    // },
    // getters : getters,
    // mutations : mutations
});