<template>
	<div id="searchYear">
		<div @click="changeYear(2014)">2014</div>
		<div @click="changeYear(2015)">2015</div>
		<div @click="changeYear(2016)">2016</div>
		<div @click="changeYear(2017)">2017</div>
		<div>{{sendNum}}</div>
	</div>
</template>

<script>
export default {
	data(){
		return{

		}
	},
	props:{
		sendNum:{
			type : Number,
		}
	},
	mounted(){

	},
	methods: {
		changeYear(year){
			console.log(year);
			this.$emit('child', year);
		}
	}
}
</script>

<style>
#searchYear{
	padding-left : 30px;
	display: flex;
}

#searchYear div{
	margin : 10px;
	height: 20px;
}
</style>