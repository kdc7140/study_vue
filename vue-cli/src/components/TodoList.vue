<template>
    <section>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, idx) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow"> 
                <i class="checkBtn fas fa-check" v-bind:class="{chenckBtnCompleted: todoItem.completed}" 
                    v-on:click="toggleComplete({todoItem, idx})"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <span class="removeBtn" type="button" v-on:click="removeTodo({todoItem, idx})">
                    <i class="far fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default ({
    methods : {
        //mapMutation은 선언만 하면 인자는 자동으로 들어간것으로 처리됨
        //대신 실행부에서 형식을 맞춰줘야함
        //아래 예제는 인자를 객체로 넘기기 때문에 실행부에서도 인자를 객체로 넘겨주면 됨
        //메서드 이름과 호출할 함수명이 다른경우 mapMutation을 객체로 선언해서 사용하면 됨
        ...mapMutations({
            removeTodo : 'removeOneItem',
            toggleComplete : 'toggleOneItem'
        }),
        
        // removeTodo(todoItem, idx){
        //     console.log(todoItem, idx);
        //     this.$store.commit('removeOneItem', {todoItem, idx});
        // },
        // toggleComplete(todoItem, idx){
        //     this.$store.commit('toggleOneItem', {todoItem, idx});
        // }
    },
    computed : {
        ...mapGetters(['storedTodoItems']),
        
        // todoItems(){
        //     return this.$store.getters.storedTodoItems;
        // }
    }
})
</script>

<style scoped>
    ul{
        list-style-type: none;
        padding-left: 0px;
        margin-top:0;
        text-align: left;
    }
    .list-enter-active, .list-leace-active{
        transition: all 1s;
    }
    .list-enter, .list-leace-to{
        opacity: 0;
        transform: translateY(30px);
    }
    li{
        display: flex;
        min-height: 50px;
        height : 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .chenckBtnCompleted {
        color: #b3adad;
    }
    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }
    .removeBtn{
        margin-left: auto;
        color: #de4343;
    }
</style>
