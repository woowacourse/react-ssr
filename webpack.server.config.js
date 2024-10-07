const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: path.resolve(__dirname, 'src/server/main.js'),

  resolve: {
    extensions: ['.js', '.jsx'],
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
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext]',
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext]',
        },
      },
    ],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist/server'),
    publicPath: '/',
  },
};
