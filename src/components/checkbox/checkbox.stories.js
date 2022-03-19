import Checkbox from './checkbox.pug'


export default {
  title: 'Checkbox',
  argTypes: {
    title: { control: 'text' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    tabindex: { control: 'number' },
  },
};

export const CheckboxSimple = ({ title, disabled, checked, tabindex }) => {
  const props = { title, disabled, checked, tabindex };
  const contents = title;

  return Checkbox({ props, contents });
};

CheckboxSimple.storyName = 'Checkbox'

CheckboxSimple.args = {
  title: 'Checkbox',
}
