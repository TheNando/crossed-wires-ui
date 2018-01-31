import m from 'mithril'

import StatusBar from 'components/StatusBar'
import MenuBar from 'components/MenuBar'
import './HudPage.css'


class HudPage {
    view () {
        return m('.page', [
            m(StatusBar),
            m('hud.content', 'HUD'),
            m(MenuBar),
        ])
    }
}

export default HudPage
