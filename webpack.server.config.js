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
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i, // 이미지 파일 형식 지정
        type: 'asset/resource', // Webpack 5에서는 file-loader가 통합된 기능을 사용 가능
      },
    ],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist/server'),
  },
};
