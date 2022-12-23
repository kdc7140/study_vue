<template>
  <div id="listView">
	<table>
		<ul>
			<li v-for="item in this.movieList" :key="item">
				<img src="../assets/doctor.png">
				<div>
					<p>영화명 : {{ item.movieNm }}</p>
					<p>영화명 미션임파서블</p>
					<p>영화명 미션임파서블</p>
					<p>영화명 미션임파서블영화명 미션임파서블영화명 미션임파서블영화명 미션임파서블영화명 미션임파서블영화명 미션임파서블영화명</p>
				</div>
			</li>
		</ul>
	</table>
  </div>
</template>

<script>

import { callMovieList } from '../api/index.js';

export default {
	data () {
		return {
			movieList : [],
			testText : "",
		}		
	},
	created() {
		callMovieList()
			.then(result => {
				console.log(result.data.boxOfficeResult.dailyBoxOfficeList);
				this.movieList = result.data.boxOfficeResult.dailyBoxOfficeList;
				this.testText = "ㅁㅁㅁ";
				console.log(this.movieList);
				console.log(this.testText);
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
	display : block;
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
}

#listView img{
	width : 300px;
	height : 200px;
	padding : 20px;
}

</style>