import m from 'mithril'

class Nav {
  current = { name: 'assess' }

  items = [
    {
      name: 'assess',
      icon: 'info',
    },
    {
      name: 'engage',
      icon: 'power',
    },
    {
      name: 'extract',
      icon: 'mortar-board',
    },
    {
      name: 'aquire',
      icon: 'shopping-cart',
    },
    {
      name: 'install',
      icon: '',
    },
    {
      name: 'repair',
      icon: '',
    },
  ]

  select = (name) => {
    this.current = this.items.find((item) => item.name === name)
  }

  selectedClass = (name) => (this.current.name === name ? 'selected' : '')
}

export default new Nav()
