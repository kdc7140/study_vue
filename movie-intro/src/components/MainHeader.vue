<template>
  <div class="header">
	<img src="../assets/logo.png">
    <router-link to="#">리스트로 보기</router-link>
    <router-link to="#">이미지로 보기</router-link>
  </div>
</template>

<script>
export default {

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
	.header router-link{
		margin : 0 10px 0 10px;
		text-align: center;
		font-size: 1.5em;
		padding : 10px 0 0 0;
	}
    .header .router-link-exact-active{
        color : #354953;
    }
    .header a{
        color : black;
    }
</style>