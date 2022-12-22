import axios from 'axios';

var callMovieList = function () {
    console.log('api index callMoive');
	return axios.get(
        "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101"
    );
}

export {
    callMovieList,
}