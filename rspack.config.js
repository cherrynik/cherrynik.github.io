const path = require('path');
const { composePlugins, withNx, withWeb } = require('@nx/rspack');

module.exports = composePlugins(withNx({}), withWeb(), (config) => {
  config.module = {
    rules: [
      {
        test: /\.(png|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(eot|ttf|otf|woff|woff2)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
    ],
  };
  config.resolve = {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  };
  return config;
});
