import MainHeader from './main-header.pug'

export default {
  title: 'MainHeader',
  argTypes: {
    isMainPage: { 
      control: 'boolean',
      defaultValue: false,
    },
    isAuth: { 
      control: 'boolean',
      defaultValue: false,
    },
  }
};

export const MainHeaderSimple = (props) => {
  return MainHeader({ props });
};

MainHeaderSimple.storyName = 'MainHeader'