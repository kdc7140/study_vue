<template>
  <div id="listView">
	<table>
		<tr>
			<th>영화명</th>
			<td>미션임파서블</td>
		</tr>
		<tr>
			<th>개봉일</th>
			<td>2011.11.12</td>
		</tr>
		<tr>
			<th>관객수</th>
			<td>5,004,243</td>
		</tr>
	</table>
  </div>
</template>

<script>

import { callMovieList } from '../api/index.js';

export default {
	created() {
		callMovieList()
			.then(result => {
				console.log(result.data.boxOfficeResult);
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

</style>