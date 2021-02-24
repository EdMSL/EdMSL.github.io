const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(path) {
  return new CopyWebpackPlugin({
    patterns: [
      {
        from: `src/favicons/*`,
        to: '[name].[ext]',
      },
    ]
  });
}
