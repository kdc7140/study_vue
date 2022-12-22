<template>
  <div class="footer">
	<div>
		<router-link to="/main">
			<img src="../assets/icon_home.png">
		</router-link>
	</div>
	<div><img src="../assets/icon_recyle_list.png"></div>
	<div><img src="../assets/icon_save_list.png"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.footer{
	background-color: black;
	color : white;
	text-align: center;
}

.footer div{
	display: inline-block;
	padding : 20px 150px 20px 150px;
	/*width : 10%;*/
}

.footer div img{
	width : 50px;
}

/*.footer div router-link img{
	width : 50px;
}*/

</style>