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
            console.log('store.js -> call addOneItem');
            // const obj = {completed : false, item: todoItem};
            // localStorage.setItem(todoItem,todoItem);
            // state.todoItems.push(obj);      //state의 인자에 접근

            localStorage.setItem(todoItem, todoItem);    // key, value
            // this.todoItems.push(todoItem);
            state.todoItems.push(todoItem);
        },
        addTodo(state, todoItem) {
            localStorage.setItem(todoItem, todoItem);    // key, value
            // this.todoItems.push(todoItem);
            state.todoItems.push(todoItem);
        }
    }
});