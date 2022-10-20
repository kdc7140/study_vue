<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus"></i>
        </span>

        <Modal v-if="showModal" @close="showModal = false">
            <!-- 모달 헤더 -->
            <h3 slot="header">경고<i class="closeModalBtn fas fa-times" @clisk="showModal"></i></h3>  
            <div slot="body">
                아무것도 입력하지 않으셨습니다. 
            </div>
        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default ({
    data(){
        return {
            newTodoItem : '',
            showModal : false
        }
    },
    methods : {
        addTodo(){
            console.log(this.newTodoItem);

            if(this.newTodoItem !== ""){
                this.$store.commit('addOneItem', this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = '';
        }
    },
    components:{
        Modal : Modal
    }
})
</script>

<style scoped>
    input:focus{
        outline : none;
    }
    .inputBox{
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input{
        border-style: none;
        font-size:0.9rem;
    }
    .addContainer{
        float: right;
        background: linear-gradient(to right, #6478fb, #8763fb);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn{
        color: white;
        vertical-align: middle;
    }
</style>
