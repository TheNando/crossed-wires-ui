import Menu from 'Services/Menu'
import './MenuBar.css'


class MenuBar {
    static selectedItemClass (index) {
        return Menu.isCurrent(index) ? '.selected' : ''
    }

    static menuItemElement (item, index) {
        return m(`menu-item${MenuBar.selectedItemClass(index)}`,
            { onclick: () => Menu.select(index) },
            [
                m(`i.typcn.typcn-${item.icon}`),
                m('span', item.name),
            ]
        )
    }

    view () {
        return m('menu', Menu.items.map(MenuBar.menuItemElement))
    }
}

export default MenuBar
