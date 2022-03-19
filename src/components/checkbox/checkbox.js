// симулировать клик при нажатии на Enter когда label.js-checkbox в фокусе
const checkboxEnterClick = () => {
  const checkboxes = document.querySelectorAll('.js-checkbox');

  const simulateClick = (event, elem) => {
    if (event.key === 'Enter') elem.click();
  };

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('keydown', (e) => simulateClick(e, checkbox));
  });
};

export default checkboxEnterClick;
