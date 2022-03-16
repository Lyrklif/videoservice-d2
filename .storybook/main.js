const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  "stories": [
    "../src/**/**/*.stories.mdx",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    "storypug",
  ],
  "framework": "@storybook/html",
  webpackFinal: async (config, { configType }) => {
    // configType = 'DEVELOPMENT' || 'PRODUCTION'

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.plugins.push(new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
      chunkFilename: '[id]-[contenthash].css',
    }));

    return config;
  },
}