import m from 'mithril'

import MenuBar from 'components/MenuBar'
import './EngagePage.css'


class EngagePage {
    view () {
        return m('.page', [
            m('engage.content', 'Engage'),
            m(MenuBar),
        ])
    }
}

export default EngagePage
