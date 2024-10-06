const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  module: "development",
  entry: "./src/client/main.js",
  output: {
    path: path.resolve("dist/client"),
    filename: "bundle.js",
    clean: true,
    publicPath: "/",
  },
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
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    minimize: false,
  },
};
