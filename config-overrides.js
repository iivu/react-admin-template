const {injectBabelPlugin} = require('react-app-rewired')
const path = require('path')


module.exports = function override (config, env) {

  config.resolve = {
    extensions: ['.js', '.jsx', '.json'],
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  }

  config = injectBabelPlugin(
    ['import',{libraryName:'antd',libraryDirectory:'es',style:'css'}],
    config,
  )

  return config
}