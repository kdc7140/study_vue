import axios from "axios";
import Vue from 'vue';

//export default {
//    install(Vue) {
//        Vue.$callList =  () => {
//            console.log("callList");
//            return axios.get(
//                "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101"
//            );
//        };
//    },
//    commonFunc : () => {
//        console.log("common");
//    },

//    testFunc : () => {
//        console.log("Test");
//    },

//}

Vue.prototype.$test = "ABC";


export default class commonUtil{
    static commonFunc = () => {
        console.log('common');
    };

    static testFunc = () => {
        console.log("teset");
    };

    static callList =  () => {
        console.log("callList");
        return axios.get(
            "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101"
        );
    };
}