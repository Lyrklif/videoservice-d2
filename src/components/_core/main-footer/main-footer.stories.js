import MainFooter from './main-footer.pug'
import initImageLoadingScript from '../../_shared/image/index'

export default {
  title: 'MainFooter',
};

export const ChannelCardSimple = () => {
  setTimeout(() => { initImageLoadingScript(); }, 100);
  return MainFooter();
};

ChannelCardSimple.storyName = 'MainFooter'