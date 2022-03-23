import Link from './link.pug'


export default {
  title: 'Link',
  argTypes: {
    title: { 
      control: 'text', 
      defaultValue: 'Ссылка', 
    },
    href: { 
      control: 'text', 
      defaultValue: '#', 
    },
    disabled: { 
      control: 'boolean',
      defaultValue: false,
    },
    variant: {
      control: { type: 'select' },
      options: [ 'primary', 'secondary', 'dark' ],
    },
  },
};


export const LinkSimple = (props) => {
  const contents = props.title;
  return Link({ props, contents, });
};

LinkSimple.storyName = 'Link'