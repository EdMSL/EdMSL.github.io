const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function() {
  return new CopyWebpackPlugin({
    patterns: [
      {
        from: `games/**`,
        to: './',
      },
    ],
  });
}
