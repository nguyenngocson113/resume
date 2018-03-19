const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
            },
        },
        {
          test:/\.(s*)css$/, 
          use: ExtractTextPlugin.extract({ 
                  fallback:'style-loader',
                  use:['css-loader','style-loader'],
              })
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    // root: __dirname + "/src/js",
    extensions: ['.js', '.jsx'],
    alias: {
        "react": path.resolve(__dirname, 'src/build/webpack-alias-react.js'),
        "react-dom": path.resolve(__dirname, 'src/build/webpack-alias-react-dom.js'),
    }
  }
};