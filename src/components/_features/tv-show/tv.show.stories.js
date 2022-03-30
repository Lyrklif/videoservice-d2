import TVShow from './tv-show.pug'


export default {
  title: 'TVShow',
  argTypes: {
    time: { 
      control: 'text', 
      defaultValue: '00:00', 
    },
    title: { 
      control: 'text', 
      defaultValue: 'Название шоу', 
    },
    href: { 
      control: 'text', 
      defaultValue: '#', 
    },
    variant: {
      control: { type: 'select' },
      options: [ 'primary' ],
    },
  },
};

export const TVShowSimple = (props) => {
  const elem = TVShow({ props });
  const wrap = `<table>${elem}</table>`;

  return wrap;
};

TVShowSimple.storyName = 'TVShow'