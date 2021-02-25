const {merge} = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssExtractPlugin = require('./webpack/plugins/mini-css-extract-plugin');
const copyFavicons = require('./webpack/plugins/copy-favicons');
const copyGames = require('./webpack/plugins/copy-games');
const css = require('./webpack/rules/css');
const js = require('./webpack/rules/js');
const images = require('./webpack/rules/images');
const baseWebpackConfig = require('./webpack.base.config');

const plugins = [
  new CleanWebpackPlugin(),
  CssExtractPlugin(),
  copyFavicons(`${baseWebpackConfig.externals.paths.src}/favicons`),
  copyGames(),
];

const buildWebpackConfig = merge([
  baseWebpackConfig,
  {
    mode: 'production',
    plugins,
  },
  js(),
  css('production', `${baseWebpackConfig.externals.paths.src}/styles/resources`),
  images(),
]);

module.exports = buildWebpackConfig;
