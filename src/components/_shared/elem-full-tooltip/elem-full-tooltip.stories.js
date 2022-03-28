import ElemFullTooltip from './elem-full-tooltip.pug'
import initImageLoadingScript from '../image/index'
import tooltipScriptInit from './tooltip-clipping'

let hiddenText = 'Скрытый текст с описанием'
for (let index = 0; index < 30; index++) {
  hiddenText = `Скрытый текст с описанием (${index}) ${hiddenText}`
}

export default {
  title: 'Elem full tooltip',
  argTypes: {
    text: { 
      control: 'text',
      defaultValue: hiddenText,
    },
    alwaysShow: { 
      control: 'boolean',
      defaultValue: false,
    },
    wrapTag: {
      control: { type: 'select' },
      options: [ 'div' ],
      defaultValue: 'div',
    },
    contentTag: {
      control: { type: 'select' },
      options: [ 'div' ],
      defaultValue: 'div',
    },
    textTag: {
      control: { type: 'select' },
      options: [ 'p' ],
      defaultValue: 'p',
    },
    contentClasses: { control: 'text' },
    textClasses: { control: 'text' },
  },
};


export const ElemFullTooltipSimple = (props) => {
  setTimeout(() => { 
    initImageLoadingScript() 
    tooltipScriptInit()
  }, 100);

  const sizes = `height: 370px;width: 370px;`
  const contentStyles = `
    ${sizes}
    background: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  const contents = `
    <div style="${contentStyles}">
      <p style="text-align: center; margin: 0;">Hover me</p>
    </div>
  `

  return ElemFullTooltip({ props: { ...props, style: sizes }, contents });
};

ElemFullTooltipSimple.storyName = 'Elem full tooltip'
