import Image from './image.pug'
import initImageLoadingScript from './index'

export default {
  title: 'Image',
  argTypes: {
    src: { 
      control: 'text', 
      defaultValue: 'https://ps.w.org/facebook-conversion-pixel/assets/icon-256x256.png', 
    },
    src2x: { control: 'text' },
    srcset: { control: 'text' },
    sizes: { control: 'text' },
    alt: { 
      control: 'text', 
      defaultValue: 'Альтернативный текст', 
    },
    width: { control: 'number' },
    height: { control: 'number' },
    objectFit: {
      control: { type: 'select' },
      options: [ 'cover', 'fill', 'contain', 'scale-down', 'none' ],
      defaultValue: 'none',
    },
  },
};


export const ImageSimple = (props) => {
  return Image({ props });
};

ImageSimple.storyName = 'Image'

ImageSimple.argTypes = {
  loading: {
    control: { type: 'select' },
    options: [ 'eager', 'auto' ],
    defaultValue: 'auto', 
  },
}


export const ImageLazy = (props) => {
  setTimeout(() => { initImageLoadingScript() }, 100);
  return Image({ props });
};

ImageLazy.storyName = 'Image (lazy load)'
