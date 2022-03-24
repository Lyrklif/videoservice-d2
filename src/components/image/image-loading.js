const imageLoading = () => {
  const images = document.querySelectorAll('.js-lazy-image');

  const loadImageHandler = (image) => {
    image.classList.add('image_loaded');
    image.classList.remove('image_loading');
  };

  const errorLoadImageHandler = (image) => {
    image.classList.add('image_error');
  };

  images.forEach((image) => {
    image.addEventListener('load', loadImageHandler(image));
    image.addEventListener('error', errorLoadImageHandler(image));
  });
};

export default imageLoading;
