const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const dotenv = require('dotenv');
const env = dotenv.config().parsed;

module.exports = {
  mode: 'development',
  entry: './src/client/main.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    clean: true,
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './views/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/images', to: 'images' },
        { from: 'public/styles', to: 'styles' },
      ],
    }),
    new Webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'public/images'),
      '@styles': path.resolve(__dirname, 'public/styles'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
    extensions: ['.js', '.jsx'],
  },
};
