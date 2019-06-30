module.exports = {
  chainWebpack: config => {
    config.module
      .rule('iview-loader')
      .test(/\.vue$/)
      .use('iview-loader')
        .loader('iview-loader')
        .options({
          prefix: false
        })
        .end()
  },

  css: { 
    loaderOptions: { 
      less: {
          javascriptEnabled: true 
      }
    }
  }

}