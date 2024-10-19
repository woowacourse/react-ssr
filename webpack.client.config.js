const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/images', to: 'images' }, // public 폴더의 이미지를 dist로 복사
      ],
    }),
  ],
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'public/images'),
      '@styles': path.resolve(__dirname, 'public/styles'),
    },
    extensions: ['.js', '.jsx'],
  },
};
