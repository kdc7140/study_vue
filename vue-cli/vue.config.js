const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //modal이 정상적으로 나오지 않아 추가함
  lintOnSave : false
})


