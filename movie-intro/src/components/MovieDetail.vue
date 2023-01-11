<template>
  <div>
	Detail
  </div>
</template>

<script>

import axios from 'axios';

export default {
	data(){
		return {
			rcvCd : "",
		}
	},
	mounted(){
		const { movieCd } = this.$route.query;
		this.rcvCd = movieCd;
		console.log("영화코드 : ", this.rcvCd);

		axios.get(
			"http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd="+movieCd
		).then((result)=>{
			console.log(result);
		}).catch((error) => {
			console.log(error);
		});
	},
	
}
</script>

<style>

</style>