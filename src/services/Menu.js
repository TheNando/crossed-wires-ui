// import { Api, Storage } from 'Services/Data'

const Menu = {
    current: 0,
    items: [
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
    ],
    isCurrent (index) {
        return index === Menu.current
    },
}

export default Menu
