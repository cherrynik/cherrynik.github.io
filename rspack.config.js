/**
 * @type {import('@rspack/core').Configuration}
 */
const path = require('path');
const { composePlugins, withNx, withWeb } = require('@nx/rspack');

module.exports = composePlugins(withNx({}), withWeb(), (config) => {
  config = {
    ...config,
    module: {
      rules: [
        {
          test: /\.(png|gif)$/,
          type: 'asset',
        },
        {
          test: /\.(eot|ttf|otf|woff|woff2)$/,
          type: 'asset',
        },
        {
          test: /\.svg$/,
          type: 'asset',
        },
      ],
    },
    resolve: {
      tsConfigPath: path.resolve(__dirname, 'tsconfig.app.json'),
    },
    optimization: {
      sideEffects: false,
      moduleIds: 'named',
      minimize: true,
    },
  };

  return config;
});
