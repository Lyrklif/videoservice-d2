import '!style-loader!css-loader!sass-loader!../src/sass/index.scss';
import '../src/scripts/index.js'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}