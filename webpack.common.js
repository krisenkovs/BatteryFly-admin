const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const outputFolderPath = resolve(__dirname, 'dist');

module.exports = {
  context: resolve(__dirname, ''),
  entry: [join(__dirname, 'src', 'index.tsx')],
  output: {
    path: outputFolderPath,
    filename: '[name].[fullhash].js',
    assetModuleFilename: '[name].[fullhash].[ext]',
  },
  module: {
    rules: [
      // load ts
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      // load less files
      {
        test: /\.less$/,
        exclude: /\.module\.less$/,
        type: 'asset/source',
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      // load assets
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(jpg|png|gif)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: join(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),

    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  performance: {
    hints: false,
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.less'],
  },
  target: 'web',
};
