

const tooltipClipping = () => {
  const texts = document.querySelectorAll('.js-split-tooltip');
  const options = {
    maxLines: 18,
    removeEndChars: /[.,?!\/\\:\-\s]+$/
  };

  const removeEndChars = (text) => {
    $clampify(text, options);
  }


  texts.forEach(text => removeEndChars(text))
}

export default tooltipClipping
