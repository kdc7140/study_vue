<template>
  <div id="listView">
		<search-header :sendNum="testNum" @child="changeYearSearch"></search-header>
		<h2 v-if = "this.searchTxt" > '{{ getSearchTxt }}' 검색결과...</h2>
		<button @click="test()">테스트 버튼</button>
		<table>
			<ul v-if = this.searchTxt>
				<li v-for="item in getMovieList" :key="item.title">
					<img :src =  item.image>
					<div>
						<p>영화명 : {{ item.title }}</p>
						<p>출연  : {{ item.actor }}</p>
						<p>평점 : {{ item.userRating }}</p>
						<p>감독 : {{ item.director }}</p>
					</div>
				</li>
			</ul>
			<ul v-else>
				<li v-for="item in getMovieList" :key="item.moiveCd">
					<img :src=item.image @click="moveToDatail" v-bind:data-cd=item.movieCd>
					<!--<img src="../assets/2014_01.png" v-on:click="moveToDatail" v-bind:data-cd=item.movieCd>-->
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

import commonUtil from '../common/common.util.js';
import searchHeader from './SearchYear.vue';
import {  mapGetters } from 'vuex'

export default {
    components: { searchHeader },
	data () {
		return {
			searchTxt : this.$store.getters['searchWord'],
			searchYear : 0,
			imgUrl : "",
			movieCd : "",
			testNum : 1,
		}		
	},
	created() {
		commonUtil.testFunc();
	},
	mounted(){
		const { searchText } = this.$route.query;
		this.searchTxt = searchText;
		console.log("검색어 : ", this.searchTxt);
		
		if(this.searchTxt === "" || this.searchTxt == undefined){
			this.$store.dispatch("callMovie", '20140101');
		}else{
			this.$store.dispatch("callNaverMovie", this.searchTxt);
		}
	},
	computed : {
		...mapGetters(['getMovieList', 'getSearchTxt']),
		//movieList() {
		//	return this.$store.getters['getMovieList'];
		//},
	},
	methods : {
		moveToDatail(event){
			console.log(event.target.getAttribute('data-cd'));
			this.movieCd = event.target.getAttribute('data-cd');
			this.$router.push({
					path : "/detail",
					query : {
							movieCd : this.movieCd
					}
			});
		},
		test(){
			this.testNum += 1;
			console.log(this.testNum);
		},
		changeYearSearch(year){
			console.log(year);
			this.searchTxt = "";
			this.searchYear = year;
			this.$store.dispatch("callMovie", year);
		},
	},
}
</script>

<style>



h2{
	margin-block-start : 0;
	margin-block-end : 0;
	padding : 30px 20px 50px 40px;
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
	margin : 20px 0 0 30px;
	padding : 20px;
	justify-content: center;
	align-items: center;
	font-size : 18px;

}

#listView img{
	width : 250px;
	height : 350px;
	padding : 20px;
	object-fit: contain;
}

</style>