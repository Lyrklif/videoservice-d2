import Input from './input.pug'


export default {
  title: 'Input',
  argTypes: {
    value: { 
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
    variant: {
      control: { type: 'select' },
      options: [ 'primary' ],
    },
    size: {
      control: { type: 'select' },
      options: [ 'm' ],
    },
    type: {
      control: { type: 'select' },
      options: [ 'text', 'number', 'search', 'password' ],
      defaultValue: 'text',
      description: 'тип данных поля {text|number|search|password}',
    },
    inputmode: {
      control: { type: 'select' },
      options: [ 'text', 'decimal', 'numeric', 'search' ],
      defaultValue: 'text',
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


export const InputSimple = (props) => {
  return Input({ props });
};

InputSimple.storyName = 'Input'

InputSimple.args = {
  value: 'Input value',
}