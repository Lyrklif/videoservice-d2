import Text from './text.pug'


export default {
  title: 'Text',
  argTypes: {
    text: {
      control: 'text',
      defaultValue: 'Текст',
    },
    tag: {
      control: { type: 'select' },
      options: ['p', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      defaultValue: 'p',
    },
    variant: {
      control: { type: 'select' },
      options: ['p', 'h2', 'h3'],
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'medium'],
    },
    color: {
      control: { type: 'select' },
      options: ['base', 'gray', 'white', 'error', 'blue', 'primary', 'primary-dark'],
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'justify'],
    },
  },
};


export const TextSimple = ({ text, tag, variant, weight, color, align }) => {
  const props = { tag, variant, weight, color, align }
  const contents = text;

  return Text({ props, contents });
};

TextSimple.storyName = 'Text'