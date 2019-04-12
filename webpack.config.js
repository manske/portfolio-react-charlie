var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entryPoint = path.resolve(__dirname, 'index.js');

module.exports = {
  entry: entryPoint,
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js',
    publicPath: '/'
  },
  node: { 
    fs: 'empty' }, 
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-react']
          }
        }
    },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap'
      },
      {
        test: /\.css$/,  
        include: /node_modules/,  
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff2?)$/,
        loader: 'file-loader'
      },
      {
        test: /\.dae$/,
        loader: 'file-loader',
        options: {
           name (file) {
            if (env === 'development') {
              return '[path][name].[ext]'
            }
            return '[hash].[ext]'
          }
        }
      }

    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React, React-router-dom simple boilerplate',
      template: 'index.html',
      filename: 'index.html'
    })
  ]
};
