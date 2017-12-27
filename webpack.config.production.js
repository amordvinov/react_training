const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const port = process.env.PORT || 3000;
const outputPath = path.join(__dirname, 'dist');

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: __dirname,
    filename: 'dist/static/bundle.js'
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('dist/static/bundle.css'),
    new CopyWebpackPlugin([
      { from: 'public/favicon.ico', to: 'dist/static/favicon.ico' },
      { from: 'public/manifest.json', to: 'dist/static/manifest.json' }
    ]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      },
      minimize: true,
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'dist/index.html',
      template: path.join(__dirname, '/public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'production' })
  ],
  devtool: 'source-map',
  devServer: {
    port,
    compress: true,
    historyApiFallback: true
  }
};
