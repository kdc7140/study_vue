<template>
  <div>
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
  
</template>

<script>

//import MainPage from './components/MainPage.vue';
import mainHeader from './components/MainHeader.vue';
import mainFooter from './components/MainFooter.vue';

export default {
  components: {
    //MainPage,
    mainHeader,
    mainFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.header{
  height : 10%;
  padding : 10px;
}
.footer{
  height : 10%;
}

</style>
