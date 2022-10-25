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


const state = {
    headerText : "TO DO List!!",
    todoItems : storage.fetch()
}

const getters = {
    storedTodoItems(state){
        return state.todoItems;
    }
}

const mutations = {
    addOneItem(state, todoItem){
        let obj = {completed : false, item:todoItem}
        localStorage.setItem(todoItem, JSON.stringify(obj));    // key, value
        state.todoItems.push(obj);
    },
    removeOneItem(state, payload){
        console.log(payload);
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.idx,1);
    },
    toggleOneItem(state, payload){
        console.log(state.todoItems[payload.idx].completed);
        state.todoItems[payload.idx].completed = !state.todoItems[payload.idx].completed;
        //로컬 스토리지의 데이터를 갱신
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state){
        localStorage.clear();
        state.todoItems = [];
    }
};


export default{
    state : state,
    getters : getters,
    mutations : mutations
};