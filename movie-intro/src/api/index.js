import axios from 'axios';
//axios.defaults.baseURL = "http://localhost:8080";
//axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
//axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

export default {
    install(Vue) {
        // vue3에서는 전역 사용을 위해 globalProperties를 사용
        // vue2에서는 prototype 사용
        Vue.config.globalProperties.$callMovieList = function () {
            console.log("api index callMoive");
            return axios.get(
                "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101"
            );
        };


        Vue.config.globalProperties.$searchMovieList = () => {
            console.log("$searchList");
            return axios.create({
                withCredentials: true, // send cookies when cross-domain requests
                timeout: 5000,
                headers: {
                    // 헤더 세팅
                    //Accept: "application/json",
                    "X-Naver-Client-Id": "GlaGYwsP6sOQdEvfdTEi",
                    "X-Naver-Client-Secret": "BFfJfKfhlW",
                    //"Access-Control-Allow-Origin": "*",
                    //"Access-Control-Allow-Headers": "X-Requested-With",
                },
                proxy: {
                    // url 리소스를 추가해주자
                    "/v1": {
                        // 해당 리소스가 있는 url일 경우 타겟으로 baseURL을 변경
                        target: "https://openapi.naver.com",
                        // 기본 베이스URL을 바꿔줄지 여부
                        changeOrigin: true,
                    },
                },
            });
        };
    },
};