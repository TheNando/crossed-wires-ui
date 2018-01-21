import MenuBar from 'Components/MenuBar'
import './HudPage.css'


class HudPage {
    view () {
        return m('.page', [
            m('hud.content', 'HUD'),
            m(MenuBar),
        ])
    }
}

export default HudPage
