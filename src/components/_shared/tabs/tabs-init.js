const tabsInit = (params = {}) => {
  const {
    tabName, // название табов, нужно для связки контролов с контентом
    animateName, // название анимации
    activeIndex, // индекс активного таба после инициализации
    activeClass = 'active', // класс для активного таба (контрол и контента)
  } = params


  const controls = document.querySelectorAll(`[data-tabs-control="${tabName}"]`)
  const contents = document.querySelectorAll(`[data-tabs-content="${tabName}"]`)


  /**
   * Сделать все элементы неактивными
   */
  const inactiveAll = () => {
    controls.forEach((el, index) => {
      el.classList.remove(activeClass)
      contents[index].classList.remove(activeClass)
    })
  }

  /**
   * Сделать элементы по индексу активными
   *
   * @param {number} [index=0] индекс элемента в массиве
   */
  const activeByIndex = (index = 0) => {
    controls[index].classList.add(activeClass)
    contents[index].classList.add(activeClass)

    // если передан класс анимации, то присвоить его после отображения блока
    if (animateName) {
      setTimeout(() => contents[index].classList.add(animateName), 0);
    }
  }

  /**
   * Сменить активный элемент
   *
   * @param {number} [index=0] индекс элемента в массиве
   */
  const changeActiveTab = (index = 0) => {
    inactiveAll()
    activeByIndex(index)
  }

  /**
   * Обработчик кликов по контролам табов
   * Событие по-умолчанию блокируется, активный элемент меняется
   *
   * @param {MouseEvent} event event события click
   * @param {number} index индекс элемента в массиве
   */
  const controlClickHandler = (event, index) => {
    event.preventDefault();
    changeActiveTab(index)
  }


  /**
   * Установить начальный активный таб если передан параметр activeIndex
   */
  const setStartActiveTab = () => {
    if (typeof activeIndex === 'number') changeActiveTab(activeIndex)
  }


  setStartActiveTab()


  controls.forEach((el, index) => {
    el.addEventListener('click', (e) => controlClickHandler(e, index))
  })
}


export default tabsInit