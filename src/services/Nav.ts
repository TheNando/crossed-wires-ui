class Nav {
  private _current = 'quiz'

  items = {
    hud: {
      icon: 'info',
      label: 'assess',
      name: 'hud',
    },
    pilot: {
      label: 'engage',
      icon: 'power',
      name: 'pilot',
    },
    quiz: {
      label: 'extract',
      icon: 'mortar-board',
      name: 'quiz',
    },
    shop: {
      label: 'aquire',
      icon: 'shopping-cart',
      name: 'shop',
    },
    install: {
      label: 'install',
      icon: '',
      name: 'install',
    },
    repair: {
      label: 'repair',
      icon: '',
      name: 'repair',
    },
  }

  get current() {
    return this.items[this._current]
  }

  get itemsArray() {
    return Object.values(this.items)
  }

  select(name) {
    this._current = name || this._current
  }

  selectedClass(name) {
    return this.current.name === name ? 'selected' : ''
  }
}

export default new Nav()
