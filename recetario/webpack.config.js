const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // { test: /\.s[ac]ss$/i, use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'] },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: "style-loader",
            // loader: MiniCSSExtractPlugin.loader
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: { plugins: [] },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
  },
};
