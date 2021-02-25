const {merge} = require('webpack-merge');
const css = require('./webpack/rules/css');
const js = require('./webpack/rules/js');
const images = require('./webpack/rules/images');
const devserver = require('./webpack/devserver');
const copyFavicons = require('./webpack/plugins/copy-favicons');
const baseWebpackConfig = require('./webpack.base.config');

const plugins = [
  copyFavicons(`${baseWebpackConfig.externals.paths.src}/favicons`),
];

const devWebpackConfig = merge([
  baseWebpackConfig,
  {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    target: 'web', // https://github.com/webpack/webpack-dev-server/issues/2758
    watchOptions: {
      poll: true,
      ignored: "/node_modules/"
    },
    plugins,
  },
  css('development', `${baseWebpackConfig.externals.paths.src}/styles/resources`),
  js(),
  images(),
  devserver(`${baseWebpackConfig.externals.paths.src}/html`),
]);

module.exports = devWebpackConfig;
