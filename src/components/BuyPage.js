import m from 'mithril'

import StatusBar from 'components/StatusBar'
import MenuBar from 'components/MenuBar'
import './BuyPage.css'


class BuyPage {
    view () {
        return m('.page', [
            m(StatusBar),
            m('buy.content', 'Buy'),
            m(MenuBar),
        ])
    }
}

export default BuyPage
