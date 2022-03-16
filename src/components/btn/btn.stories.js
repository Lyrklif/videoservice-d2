import Btn from './btn.pug'
import BtnInput from './btn-input.pug'
import BtnLink from './btn-link.pug'


export default {
  title: 'Button',
  argTypes: {
    title: { control: 'text' },
    disabled: { control: 'boolean' },
    variant: {
      control: { type: 'select' },
      options: [ 'primary', 'secondary'],
    },
  },
};

const defaultArgs = { disabled: false }

export const Simple = ({ title, disabled, variant, tag }) => {
  const props = { disabled, variant, tag, title };
  const contents = title;

  return Btn({ props, contents, });
};

Simple.storyName = 'Button'

Simple.argTypes = {
  tag: {
    control: { type: 'select' },
    options: ['button', 'div', 'span'],
  },
}

Simple.args = {
  ...defaultArgs,
  tag: 'button',
  title: 'Simple button',
}



export const InputButton = ({ title, disabled, variant }) => {
  const props = { disabled, variant, value: title, title };

  return BtnInput({ props });
};

InputButton.storyName = 'Button (input)'

InputButton.args = {
  ...defaultArgs,
  title: 'Input button',
}


export const LinkButton = ({ title, disabled, variant, href }) => {
  const props = { disabled, variant, href, title };
  const contents = title;

  return BtnLink({ props, contents });
};

LinkButton.storyName = 'Button (link)'

LinkButton.argTypes = {
  href: { control: { type: 'text' } },
}

LinkButton.args = {
  ...defaultArgs,
  title: 'Link button',
  href: '#',
}
