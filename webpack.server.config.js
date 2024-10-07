const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  entry: path.resolve(__dirname, "src/server/main.js"),
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
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
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist/server"),
  },
};
