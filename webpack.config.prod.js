const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  devServer: {
    static: "./dist",
    hot: true,
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
