import initLibs from './_libs';
import initComponnets from './_components';
import initGlobal from './_global';

window.addEventListener('load', () => {
  initLibs();
  initGlobal();
  initComponnets();
});
