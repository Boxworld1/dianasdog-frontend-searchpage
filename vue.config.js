const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/search': {
        target: 'http://localhost:8000', // todo:修改为你的Django服务器地址
        changeOrigin: true,
      }
    }
  },
})
