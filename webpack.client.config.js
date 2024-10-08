const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  module: "development",
  entry: "./src/client/main.js",
  output: {
    path: path.resolve("dist/client"),
    filename: "bundle.js",
    clean: true,
    publicPath: "/client", // 페이지 요청과 bundle.js 요청을 구분하기 위함
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./views/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/images", to: "images" }, // public 폴더의 이미지를 dist로 복사
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
