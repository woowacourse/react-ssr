const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

// .env 파일에서 환경 변수 로드
const env = dotenv.config().parsed;

// 환경 변수를 객체로 변환
const envKeys = Object.keys(env || {}).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  mode: "development",
  entry: "./src/client/main.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
    clean: true,
    publicPath: "/static/",
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
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./views/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/images", to: "images" },
        { from: "public/styles", to: "styles" },
      ],
    }),
    new webpack.DefinePlugin(envKeys), // 환경 변수를 전역 변수로 정의
  ],
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "public/images"),
      "@styles": path.resolve(__dirname, "public/styles"),
    },
    extensions: [".js", ".jsx"],
  },
};
