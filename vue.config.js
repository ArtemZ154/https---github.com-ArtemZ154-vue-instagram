const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  }
})

module.exports = defineConfig({
  chainWebpack: config => {
    config
      .plugin('eslint')
      .tap(args => {
        args[0].fix = true
        return args
      })
  }
})
