import FilmCard from './film-card.pug'
import initImageLoadingScript from '../../_shared/image/index'

export default {
  title: 'FilmCard',
  argTypes: {
    title: { 
      control: 'text',
      defaultValue: 'Название фильма',
    },
    description: { 
      control: 'text',
      defaultValue: 'Описание фильма',
    },
    href: { 
      control: 'text',
      defaultValue: '#',
    },
    src: { 
      control: 'text', 
      defaultValue: 'https://image.tmdb.org/t/p/w500//yvKrycViRMQcIgdnjsM5JGNWU4Q.jpg', 
    },
    src2x: { control: 'text' },
    srcset: { control: 'text' },
  },
};


export const FilmCardSimple = (props) => {
  setTimeout(() => { initImageLoadingScript() }, 100);
  return FilmCard({ props });
};

FilmCardSimple.storyName = 'FilmCard'
