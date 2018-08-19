var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'style.css',
    disable: false,
    allChunks: true
});

module.exports = {
  //context: path.resolve(__dirname, 'app'),
  devtool: debug ? "inline-sourcemap" : '',
  entry: "./app/main.js",
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devServer: {
    contentBase: './src'
  },
  module: {
  	rules: [
  		{
  			test: /\.js$/,
  			exclude: /(node_modules|bower_components)/,
  			use: {
  				loader: 'babel-loader',
  				options: {
  					presets: ['env', 'react'],
            plugins: [require('babel-plugin-transform-class-properties')]
  				}
  			}
  		},
      {
        test: /\.(css|sass|scss)$/,
        use: extractSass.extract({
          fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
       test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
  	]
  },
  plugins: debug ? [extractSass] : [
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    extractSass,
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
     title: 'Production'
     })
  ],
};