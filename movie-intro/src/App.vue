<template>
  <mainHeader></mainHeader>
  <div id="mainImage">
    <img alt="Vue logo" src="./assets/mainImage.png">
  </div>
  
  <MainPage></MainPage>
  <MainFooter></MainFooter>
</template>

<script>

import MainPage from './components/MainPage.vue';
import mainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  components: {
    MainPage,
    mainHeader,
    MainFooter
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
#mainImage{
  width : 100%;
  background-color: black;
}
#mainImage img{
  width : 100%;
  object-fit: scale-down;
}
</style>
