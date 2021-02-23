const path = require("path");
const dist = path.resolve(__dirname, "dist");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: { filename: "bundle.js", path: dist },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      hash: true,
      scriptLoading: "defer",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "~/*": path.resolve(__dirname, "src/*"),
    },
  },

  devServer: {
    contentBase: dist,
    compress: true,
    port: 3000,
  },
};
