import FilmImg from './film-img.pug'
import initImageLoadingScript from '../image/index'

export default {
  title: 'FilmImg',
  argTypes: {
    src: { 
      control: 'text', 
      defaultValue: 'https://image.tmdb.org/t/p/w500//yvKrycViRMQcIgdnjsM5JGNWU4Q.jpg', 
    },
    src2x: { control: 'text' },
    srcset: { control: 'text' },
    rounded: { 
      control: 'boolean',
      defaultValue: true,
    },
    alt: { 
      control: 'text', 
      defaultValue: 'Название фильма (альтернативный текст)', 
    },
    size: {
      control: { type: 'select' },
      options: [ 'm' ],
      defaultValue: 'm',
    },
  },
};


export const FilmImgSimple = (props) => {
  setTimeout(() => { initImageLoadingScript() }, 100);
  return FilmImg({ props });
};

FilmImgSimple.storyName = 'FilmImg'
