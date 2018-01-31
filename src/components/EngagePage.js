import m from 'mithril'

import StatusBar from 'components/StatusBar'
import MenuBar from 'components/MenuBar'
import './EngagePage.css'


class EngagePage {
    view () {
        return m('.page', [
            m(StatusBar),
            m('engage.content', 'Engage'),
            m(MenuBar),
        ])
    }
}

export default EngagePage
