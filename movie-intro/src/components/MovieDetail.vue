<template>
	<div id="detailView">
		<table>
			<ul>
				<li>
					<img src="../assets/vertical_image.png">
					<div>
						<p>영화 : {{ this.movieInfo.movieNm }}</p>
						<p>출연 : <span v-for="item in this.movieInfo.actors" :key="item.peopleNm">{{ item.peopleNmEn }}({{ item.peopleNm }}), </span></p>
						<p>감독 : <span v-for="item in this.movieInfo.directors" :key="item.peopleNm">{{ item.peopleNmEn }}({{ item.peopleNm }})</span></p>
						<p>장르 : <span>{{ this.movieInfo.genres[0].genreNm }}</span></p>
						<p>개봉일 : <span>{{ this.movieInfo.openDt }}</span></p>
						<p>상영시간 : <span>{{ this.movieInfo.showTm }} 분</span></p>
					</div>
				</li>
			</ul>
		</table>
	</div>

</template>

<script>

import axios from 'axios';

export default {
	data(){
		return {
			rcvCd : "",
			movieInfo : [],
		}
	},
	mounted(){
		const { movieCd } = this.$route.query;
		this.rcvCd = movieCd;
		console.log("영화코드 : ", this.rcvCd);

		axios.get(
			"http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd="+movieCd
		).then((result)=>{
			console.log(result.data.movieInfoResult);
			this.movieInfo = result.data.movieInfoResult.movieInfo;
		}).catch((error) => {
			console.log(error);
		});
	},
	
}
</script>

<style>
#detailView{
	background-color: black;
	color : white;
	
}

#detailView ul {
	display : inline-block;
	padding : 30px;
	padding-top : 0;
	margin-block-start : 0;
	margin-block-end : 0;
}

#detailView ul li{
	display : flex;
}


</style>