module.exports = function(partialsDir, helpersDir) {
  return {
    module: {
      rules: [
        {
          test: /\.(handlebars|hbs)$/,
          use: [
            {
              loader: "handlebars-loader",
              options: {
                helperDirs: helpersDir,
                partialDirs: partialsDir,
                // debug: true,
              }
            }
          ],
        },
      ],
    },
  };
};