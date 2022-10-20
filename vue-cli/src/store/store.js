import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    // this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    console.log(localStorage.key(i));
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state : {
        todoItems : storage.fetch()
    },
    mutations : {
        addOneItem(state, todoItem){
            let obj = {completed : false, item:todoItem}
            localStorage.setItem(todoItem, JSON.stringify(obj));    // key, value
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload){
            localStorage.removeItem(payload.todoItem);
            state.todoItems.splice(payload,1);
        },
        toggleOneItem(state, payload){
            state.todoItems[payload.idx].completed = !state.todoItems[payload.idx].completed;
            //로컬 스토리지의 데이터를 갱신
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state){
            localStorage.clear();
            state.todoItems = [];
        }
    }
});