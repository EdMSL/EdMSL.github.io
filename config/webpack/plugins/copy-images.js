const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(pathFrom) {
  return new CopyWebpackPlugin({
    patterns: [
      {
        from: `src/images/content/*`,
        to: 'images/content/[name].[ext]',
      },
    ],
  });
}
