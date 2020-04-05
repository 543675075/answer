module.exports = {
  css: {
      loaderOptions: {
        less: {
          javascriptEnabled: true
        }
      }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "components": "@/components",
        "network": "@/network",
        "router": "@/router",
        "store": "@/store",
        "views": "@/views"
      }
    }
  }
}