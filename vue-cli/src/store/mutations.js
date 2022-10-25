const addOneItem = (state, todoItem) => {
    let obj = {completed : false, item:todoItem}
    localStorage.setItem(todoItem, JSON.stringify(obj));    // key, value
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
    console.log(payload);
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.idx,1);
}

const toggleOneItem = (state, payload) => {
    console.log(state.todoItems[payload.idx].completed);
    state.todoItems[payload.idx].completed = !state.todoItems[payload.idx].completed;
    //로컬 스토리지의 데이터를 갱신
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems =(state) => {
    localStorage.clear();
    state.todoItems = [];
}

export {addOneItem, removeOneItem, toggleOneItem, clearAllItems}