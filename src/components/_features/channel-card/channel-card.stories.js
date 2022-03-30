import ChannelCard from './channel-card.pug'
import initImageLoadingScript from '../../_shared/image/index'

export default {
  title: 'ChannelCard',
  argTypes: {
    title: { 
      control: 'text', 
      defaultValue: 'Название канала', 
    },
    href: { 
      control: 'text', 
      defaultValue: '#', 
    },
    src: { 
      control: 'text', 
      defaultValue: 'https://lyrklif.github.io/videoservice/images/2x2.png', 
    },
    rounded: { 
      control: 'boolean', 
      defaultValue: true, 
    },
    bg: { 
      control: { type: 'select' },
      options: [ '', 'gray' ],
      defaultValue: 'gray', 
    },
    padding: { 
      control: { type: 'select' },
      options: [ 'm' ],
      defaultValue: 'm', 
    },
    items: {
      control: { type: 'array' },
      defaultValue:  [
        {'time': '13:00', 'title': 'Новости (с субтитрами)'},
        {'time': '14:00', 'title': 'Давай поженимся'},
        {'time': '15:00', 'title': 'Другие новости'},
      ] 
    },
  },
};

export const ChannelCardSimple = (props) => {
  setTimeout(() => { initImageLoadingScript(); }, 100);
  return ChannelCard({ props });
};

ChannelCardSimple.storyName = 'ChannelCard'