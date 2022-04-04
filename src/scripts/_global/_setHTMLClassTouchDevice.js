import isTouchDevice from 'is-touch-device';

const setHTMLClassTouchDevice = () => {
  const touchClass = 'touch-device';
  const nonTouchClass = 'non-touch-device';
  const body = document.querySelector('body');
  const isTouch = isTouchDevice();

  const addedClass = isTouch ? touchClass : nonTouchClass;
  const removedClass = !isTouch ? touchClass : nonTouchClass;

  body.classList.add(addedClass);
  body.classList.remove(removedClass);
};

export default setHTMLClassTouchDevice;
