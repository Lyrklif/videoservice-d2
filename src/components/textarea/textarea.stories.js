import Textarea from './textarea.pug'


export default {
  title: 'Textarea',
  argTypes: {
    title: { 
      control: 'text', 
      defaultValue: '', 
    },
    placeholder: { 
      control: 'text', 
      defaultValue: '', 
    },
    disabled: { 
      control: 'boolean',
      defaultValue: false,
    },
    resize: {
      control: { type: 'select' },
      options: [ 'none', 'both', 'horizontal', 'vertical', 'inherit' ],
      defaultValue: 'none',
    },
    variant: {
      control: { type: 'select' },
      options: [ 'primary' ],
    },
    size: {
      control: { type: 'select' },
      options: [ 'm' ],
    },
    padding: {
      control: { type: 'select' },
      options: [ 'm' ],
    },
    wrapTag: {
      control: { type: 'select' },
      options: [ 'label', 'span', 'div' ],
      defaultValue: 'label',
    },
    autocomplete: {
      control: { type: 'select' },
      options: [ 'off', 'on' ],
    },
    id: {  control: { type: 'text' } },
    wrapClass: { control: 'text' },
  },
};


export const TextareaSimple = (props) => {
  const contents = props.title;
  return Textarea({ contents, props });
};

TextareaSimple.storyName = 'Textarea'

TextareaSimple.args = {
  title: 'Textarea value',
}