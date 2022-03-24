import Image from './image.pug'


export default {
  title: 'Image',
  argTypes: {
    src: { 
      control: 'text', 
      defaultValue: 'tmp.png', 
    },
    src2x: { 
      control: 'text', 
      defaultValue: 'tmp2x.png', 
    },
    srcset: { control: 'text' },
    sizes: { control: 'text' },
    alt: { 
      control: 'text', 
      defaultValue: 'Альтернативный текст', 
    },
    width: { control: 'number' },
    height: { control: 'number' },
    loading: {
      control: { type: 'select' },
      options: [ 'lazy', 'eager', 'auto' ],
      defaultValue: 'lazy', 
    },
  },
};


export const ImageSimple = (props) => {
  return Image({ props });
};

ImageSimple.storyName = 'Image'
