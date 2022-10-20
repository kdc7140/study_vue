<template>
    <section>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, idx) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow"> 
                <i class="checkBtn fas fa-check" v-bind:class="{chenckBtnCompleted: todoItem.completed}" 
                    v-on:click="toggleComplete(todoItem, idx)"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <span class="removeBtn" type="button" v-on:click="removeTodo(todoItem, idx)">
                    <i class="far fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>

export default ({
    methods : {
        removeTodo(todoItem, idx){
            console.log(todoItem, idx);
            this.$store.commit('removeOneItem', {todoItem, idx});
        },
        toggleComplete(todoItem, idx){
            this.$store.commit('toggleOneItem', {todoItem, idx});
        }
    },
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
