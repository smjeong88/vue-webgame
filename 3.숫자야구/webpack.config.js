/* 
웹 팩 : 스크립트 파일이 많아서 하나로 합치는 작업
*/ 
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  // mode : development(개발)
  //        production(운영)
  devtool: 'eval',
  // eval(개발)
  // hidden-source-map(운영)
  resolve: {
    extensions: ['.js', '.vue'],
  },
  // entry, module, plugins, output 기 기본 뼈대
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader',
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
};
