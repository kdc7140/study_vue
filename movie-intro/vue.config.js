const { defineConfig } = require('@vue/cli-service');
const webpack = require("webpack");
//const path = require("path");

module.exports = defineConfig({
    transpileDependencies: true,
    // 개발 서버 설정
    devServer: {
        // 프록시 설정
        proxy: {
            // 프록시 요청을 보낼 api의 시작 부분
            "/v1": {
                // 프록시 요청을 보낼 서버의 주소
                target: "https://openapi.naver.com",
            },
        },
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                // 전역으로 사용할 라이브러리 세
                $: "jquery",
                jquery: "jquery",
                "window.jQuery": "jquery",
                jQuery: "jquery",
            }),
        ],
    },
});
