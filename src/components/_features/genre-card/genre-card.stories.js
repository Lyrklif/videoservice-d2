import GenreCard from './genre-card.pug'
import initImageLoadingScript from '../../_shared/image/index'


export default {
  title: 'GenreCard',
  argTypes: {
    title: { 
      control: 'text',
      defaultValue: 'Название жанра',
    },
    href: { 
      control: 'text',
      defaultValue: '#',
    },
    src: { 
      control: 'text', 
      defaultValue: 'https://lyrklif.github.io/videoservice/images/emoji-grinning-face.png', 
    },
    src2x: { 
      control: 'text',
      defaultValue: 'https://lyrklif.github.io/videoservice/images/emoji-grinning-face-2x.png',
    },
    srcset: { control: 'text' },
    imageClass: { control: 'text' },
    titleClass: { control: 'text' },
  },
};


export const GenreCardSimple = (props) => {
  setTimeout(() => { 
    initImageLoadingScript();
  }, 100);
  return GenreCard({ props });
};

GenreCardSimple.storyName = 'GenreCard'
