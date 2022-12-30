<template>
  <div id="listView">
	<h2> '{{ this.searchTxt }}' 검색결과...</h2>
	<table>
		<ul v-if = "this.searchTxt">
			<li v-for="item in this.movieList" :key="item">
				<img :src =  item.image >
				<div>
					<p>영화명 : {{ item.title }}</p>
					<p>출연  : {{ item.actor }}</p>
					<p>평점 : {{ item.userRating }}</p>
					<p>감독 : {{ item.director }}</p>
				</div>
			</li>
		</ul>
		<ul v-else>
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
			searchTxt : "",
			imgUrl : "",
		}		
	},
	created() {
		console.log("creatred");
		//this.$callMovieList()
		//	.then(result => {
		//		console.log(result);
		//		this.movieList = result.data.boxOfficeResult.dailyBoxOfficeList;
		//	})
		//	.catch(error => {
		//		console.log(error);
		//	});
	},
	mounted(){
		console.log("mounted");
		const { searchText } = this.$route.query;
		this.searchTxt = searchText;
		console.log("검색어 : ", this.searchTxt);
		
		if(this.searchTxt === ""){
			this.$callMovieList()
				.then(result => {
					console.log(result);
					this.movieList = result.data.boxOfficeResult.dailyBoxOfficeList;
				})
				.catch(error => {
					console.log(error);
				});
		}else{
			this.movieSearch();
		}
	},
	updated(){

	},
	methods : {
		movieSearch(){
            this.$searchMovieList().get("/v1/search/movie.json?query="+ this.searchTxt)
                .then(result => {
                    console.log(result.data);
					this.movieList = result.data.items;

                })
                .catch(error => {
                    console.log(error);
                });
        }
	}
}
</script>

<style>

h2{
	margin-block-start : 0;
	margin-block-end : 0;
	padding : 50px 20px 50px 70px;
	text-align: left;
}

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
	width : 250px;
	height : 350px;
	padding : 20px;
	object-fit: contain;
}

</style>