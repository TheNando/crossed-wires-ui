import MenuBar from 'Components/MenuBar'
import './style.css'


class BuyPage {
    view () {
        return m('.page', [
            m('buy.content', 'Buy'),
            m(MenuBar),
        ])
    }
}

export default BuyPage
