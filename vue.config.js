const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/search': {
        target: 'https://Backend-DianasDog.app.secoder.net', // todo:修改为你的Django服务器地址
        secure: false,
        changeOrigin: true,
      }
    }
  },
})
