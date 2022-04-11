import Content from './tab-content.pug'
import Control from './tab-control.pug'
import tabsInit from './index'


export default {
  title: 'Tabs',
  argTypes: {
    name: { 
      control: 'text', 
      defaultValue: 'base',
    },
    disabled: { 
      control: 'boolean',
      defaultValue: false,
    },
    variant: {
      control: { type: 'select' },
      options: [ 'primary', 'secondary', 'dark' ],
    },
    wrapTag: {
      control: { type: 'select' },
      options: [ 'li', 'div' ],
      defaultValue: 'li'
    },
  },
};


export const TabsSimple = (props) => {
  const { name: tabName } = props

  if (tabName) {
    setTimeout(() => tabsInit({ tabName }), 100);
  }
  

  const controls = `
    <ul>
      ${Control({ props: { ...props, active: true }, contents: 'Tab#1' })}
      ${Control({ props, contents: 'Tab#2' })}
      ${Control({ props, contents: 'Tab#3' })}
    </ul>
  `

  const contents = `
    <ul>
      ${Content({ props: { ...props, active: true }, contents: 'Tab#1 content' })}
      ${Content({ props, contents: 'Tab#2 content' })}
      ${Content({ props, contents: 'Tab#3 content' })}
    </ul>
  `

  const wrap = `
  ${controls}
  ${contents}
  `

  return wrap;
};

TabsSimple.storyName = 'Tabs'