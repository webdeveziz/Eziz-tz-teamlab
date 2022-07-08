const citiesTemp = [{ id: '1', value: 'Амурская' }, { id: '2', value: 'Архангельская' }, { id: '3', value: 'Астраханская' },]

function templateHtml(data, placeholder) {
  const text = placeholder ?? 'Выберите'
  const newData = data ?? citiesTemp
  const htmlLists = newData.map(elem => {
    return (
      `<li class="select__item" data-type="item" data-value="${elem.id}">${elem.value}</li>`
    )
  })

  return `
    <div class="select__input" data-type="input">
      <span>${text}</span> 
      <i class="fa fa-caret-down rotate" data-type="down"></i>
    </div>
    <div class="select__dropdown">
      <ul class="select__list">
        ${htmlLists.join('')}
      </ul>
    </div>
  `
}

class Select {
  constructor(options) {
    this.selectedId = null
    this.options = options
    this.placeholder = 'Выберите...'
  }

  init(selector) {
    this.$ = document.querySelector(selector)
    this.#render()
    this.#setup()
  }

  #render() {
    this.$.classList.add('select')
    this.$.innerHTML = templateHtml(this.options, this.placeholder)
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this)
    this.$.addEventListener('click', this.clickHandler)
  }

  clickHandler(event) {
    const { type } = event.target.dataset
    if (type === 'input') {
      this.toggle()
    } else if (type === 'item') {
      const {value: id} = event.target?.dataset
      this.select(id)
    } else if (type !== 'item' && type !== 'input') {
      this.close()
    }
  }

  get isOpen() {
    return this.$.classList.contains('open')
  }
  
  get currentItem() {
    return this.options.find(obj => obj.id === this.selectedId)
  }

  select(id) {
    this.selectedId = id
    this.placeholder = this.currentItem.value
    this.#render()
    this.$.querySelector(`[data-value='${this.selectedId}']`).classList.add('selected')
    this.close()
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() { 
    this.$.classList.add('open')
  }
  
  close() {
    this.$.classList.remove('open')
   }
  
  destroy() { 
    this.$.removeEventListener('click', this.clickHandler)
    this.$.remove()
  }
  
}
