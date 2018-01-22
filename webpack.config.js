const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/client/client-loader.jsx'
],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    inline : true
  },
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets:["es2015"]
            }
        },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    // root: __dirname + "/src/js",
    extensions: ['.js', '.jsx'],
    alias: {
        "react": path.resolve(__dirname, 'src/build/webpack-alias-react.js'),
        "react-dom": path.resolve(__dirname, 'src/build/webpack-alias-react-dom.js'),
    },
  }
};