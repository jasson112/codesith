const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',
  watchOptions: {
    aggregateTimeout: 600,
  },
  entry: {
    style: ['./scss/style.scss'],
    modules: ['./js/globals.js'],
  },
  stats: {
    errorDetails: true,
  },
  plugins: [
    new webpack.ids.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new WebpackManifestPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './images',
          to: path.resolve(__dirname, 'static/dist/images'),
        },
      ],
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'static/dist'),
    filename: 'js/[name].[contenthash:8].js',
    publicPath: '',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/css/[name].[contenthash:8].css',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
