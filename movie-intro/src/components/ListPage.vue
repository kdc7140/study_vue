<template>
  <div id="listView">
	<table>
		<ul>
			<li v-for="item in this.movieList" :key="item">
				<img src="../assets/doctor.png">
				<div>
					<p>영화명 : {{ item.movieNm }}</p>
					<p>개봉일 : {{ item.openDt }}</p>
					<p>누적 관객 : {{ item.audiAcc }}</p>
					<p>예매 순위 : {{ item.rank }}</p>
				</div>
			</li>
		</ul>
	</table>
  </div>
</template>

<script>

//import { callMovieList } from '../api/index.js';

export default {
	data () {
		return {
			movieList : [],
			testText : "",
		}		
	},
	created() {
		this.$callMovieList()
			.then(result => {
				console.log(result);
				this.movieList = result.data.boxOfficeResult.dailyBoxOfficeList;
			})
			.catch(error => {
				console.log(error);
			});
	}
}
</script>

<style>

#listView{
	background-color: black;
	color : white;
	
}

#listView ul {
	display : inline-block;
	padding : 30px;
	padding-top : 0;
	margin-block-start : 0;
	margin-block-end : 0;
}

#listView ul li{
	display : flex;
}

#listView ul li div{
	text-align: left;
	margin : 0 0 0 30px;
	padding : 20px;
	justify-content: center;
	align-items: center;

}

#listView img{
	width : 300px;
	height : 200px;
	padding : 20px;
}

</style>