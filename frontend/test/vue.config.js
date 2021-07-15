const path = require('path');
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    }
  },
  outputDir : path.resolve(__dirname , '../../backend/public'),
  devServer: {
    proxy: {
      '/': {
        target:'http://localhost:6999'
      }
    }
  }
}
