<template>
    <section>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, idx) in propsdata" v-bind:key="todoItem" class="shadow"> 
                <i calss="checkBtn fas fa=check" aria-hidden="true"></i>
                {{ todoItem}}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, idx)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>

export default ({
    // data(){
    //     return{
    //         todoItems : []
    //     }
    // },
    // created() {
    //     if(localStorage.length > 0){
    //         for(var i=0; i<localStorage.length; i++){
    //             this.todoItems.push(localStorage.key(i));   //키 값 가져오기
    //             // this.todoItems.push(localStorage.getItem(localStorage.key(i))); //value 값 가져오기
    //         }
    //     }
    // },
    methods : {
        removeTodo(todoItem, idx){
            console.log(todoItem, idx);
            // localStorage.removeItem(todoItem);
            // this.todoItems.splice(idx, 1);
            this.$emit('removeTodo', todoItem, idx);
        }
    },
    props:['propsdata']
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
    .removeBtn{
        margin-left: auto;
        color: #de4343;
    }
</style>
