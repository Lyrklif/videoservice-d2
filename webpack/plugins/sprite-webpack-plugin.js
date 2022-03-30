const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack');



module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          use: SvgSpriteHtmlWebpackPlugin.getLoader(),
        },
      ]
    },
    plugins: [
      new SvgSpriteHtmlWebpackPlugin({
        includeFiles: [
          'src/assets/svg/*.svg',
        ],
      }),
    ]
  }
};
