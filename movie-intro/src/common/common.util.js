//const methods = {
//	testFn: (res) => {
//		console.log(res);
//		console.log("test!!");
//	}
//}

export default {
    install(Vue) {
        // vue3에서는 전역 사용을 위해 globalProperties를 사용
		// vue2에서는 prototype 사용
        Vue.config.globalProperties.$getSum = function (one, two) {
            //console.log("AAAA");
            return one + two;
        };
    },
};