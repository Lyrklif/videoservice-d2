const initIcon = () => {
  const icons = document.getElementById('svg-sprite');

  if (!icons) return;

  const url = icons.dataset.path;

  const ajax = new XMLHttpRequest();
  ajax.open('GET', url, true);
  ajax.send();
  ajax.onload = () => {
    icons.innerHTML = ajax.responseText;
  };
};

export default initIcon;
