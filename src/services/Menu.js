// import { Api, Storage } from 'Services/Data'

class Menu {
    constructor () {
        this.items = [
            {
                name: 'hud',
                icon: 'info',
            },
            {
                name: 'engage',
                icon: 'power',
            },
            {
                name: 'quiz',
                icon: 'mortar-board',
            },
            {
                name: 'buy',
                icon: 'shopping-cart',
            },
        ]
        this.current = this.items.findIndex(item => `#!/${item.name}` === location.hash) || 0
    }

    isCurrent (index) {
        return index === this.current
    }

    select (index) {
        this.current = index
        m.route.set(`/${this.items[index].name}`)
    }
}

export default new Menu()
