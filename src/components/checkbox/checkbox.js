// симулировать клик при нажатии на Enter когда label.js-checkbox в фокусе
const checkboxEnterClick = () => {
  const checkboxes = document.querySelectorAll('.js-checkbox');

  const simulateClick = (event, elem) => {
    if (event.key === 'Enter') {
      // предотвращать отправку данных формы, в которой находится checkbox
      event.preventDefault();

      elem.click();
    }
  };

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('keydown', (e) => simulateClick(e, checkbox));
  });
};

export default checkboxEnterClick;
