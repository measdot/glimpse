const path = require("path");
const nodeExternals = require("webpack-node-externals");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const translateEnvToMode = env => {
  if (env === "production") {
    return "production";
  }
  return "development";
};

module.exports = env => {
  return {
    target: "electron-renderer",
    mode: translateEnvToMode(env),
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: nodeExternals({
      // this WILL include `jquery` and `jexcel` in the bundle
      whitelist: ['jquery', 'jexcel', 'jsuites']
  }),
    resolve: {
      alias: {
        env: path.resolve(__dirname, `../config/env_${env}.json`),
      },
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          // include: /node_modules\/jsuites\/dist/,
          use: ["babel-loader"],
        },
        // {
        //   test: /\.css$/,
        //   use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        // },
        {
          test: /\.(scss|css)$/,
          use: [
            "style-loader",
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            },
            "sass-loader" 
          ],
        },
      ],
    },
    plugins: [
      new FriendlyErrorsWebpackPlugin({ clearConsole: env === "development" }),
      new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css',
      })
    ],
  };
};
