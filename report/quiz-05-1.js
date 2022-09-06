var app = new Vue({
    el : '#app',
    data : {
        message : "Hello Vue.js",
        show : "show MSG",

        uid : '10',

        flag : true
    },
    methods : {
        clickBtn(){
            console.log("hi");
        },
        clickBtn2(){
            console.log('bye');
        }
    }
});