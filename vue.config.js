module.exports = {
  configureWebpack: {
    resolve: {
      //extentiosns: []

      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views':'@/views',
        'common': '@/common'
      }
    }
  }
}