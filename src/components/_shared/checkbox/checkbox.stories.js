import Checkbox from './checkbox.pug'
import initChackboxScript from './index'

export default {
  title: 'Checkbox',
  argTypes: {
    title: { control: 'text' },
    checked: { control: 'boolean' },
    variant: {
      control: { type: 'select' },
      options: [ 'primary' ],
    },
    disabled: { control: 'boolean' },
    labelClass: { control: 'text' },
    boxClass: { control: 'text' },
    inputClass: { control: 'text' },
  },
};

export const CheckboxSimple = (props) => {
  const { title } = props;
  const contents = title;

  setTimeout(() => { initChackboxScript() }, 100);
  return Checkbox({ props, contents });
};

CheckboxSimple.storyName = 'Checkbox'

CheckboxSimple.args = {
  title: 'Checkbox',
  disabled: false, 
  checked: false,
}
