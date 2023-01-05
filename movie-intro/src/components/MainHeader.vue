<template>
  <div class="header">
	<img src="../assets/logo.png">
    <div class="headerMenu">
        <router-link to="/list">영화</router-link>
        <router-link to="/chart">드라마</router-link>
        <router-link to="/test">테스트</router-link>
    </div>
    <div class="searchMenu">
        <input placeholder="검색어를 입력하세요." id="inputSearch" v-model="inputText">
        <div id="btnSearch" v-on:click='click'></div>
    </div>
  </div>
</template>

<script>

//import { computed } from "vue";
//import { useStore } from "vuex";

export default {
    data(){
        return{
            inputText : "",
        }
    },
    methods : {
        click(){ 
            console.log(this.inputText);
            var _thisPage = window.location.href;

            if(_thisPage.indexOf('list') > 0){
                this.$store.state.searchWord = this.inputText;
                //this.$store.commit("movieSearch", this.inputText);
            }else{
                this.$router.push({
                    path : "/list",
                    query : {
                        searchText : this.inputText
                    }
                });
            }

            
        },

    }
}
</script>

<style scoped>
    .header{
        color : white;
        background-color: black;
        display: flex;
        padding : 20px;
    }
	.header img{
		width : 5%;
		height : 50px;
		object-position: center left;
		margin: 0 10px 0 10px; 
	}
    .headerMenu{
        width : 55%;
        text-align: left;
        padding : 10px;
    }
    .searchMenu{
        width : 30%;
        display: flex;
        /*position: right;*/
        text-align: right;
    }
    .header .headerMenu .router-link-exact-active{
        color : white;
        margin : 0 10px 0 10px;
		text-align: center;
		font-size: 1.5em;
		padding : 10px 0 0 0;
        text-decoration: none;
    }
    .header .headerMenu a{
        color : white;
        color : white;
        margin : 0 10px 0 10px;
		text-align: center;
		font-size: 1.5em;
		padding : 10px 0 0 0;
        text-decoration: none;
    }
    .searchMenu #inputSearch{
        /*object-position: center rigth;*/
        margin : 10px;
        height : 30px;
        width : 60%;
    }
    .searchMenu #btnSearch{
        position: right;
        background-image: url(../assets/icon_search.png);
        background-size: cover;
        margin : 10px;
        
        width : 30px;
        height : 30px;
    }
</style>