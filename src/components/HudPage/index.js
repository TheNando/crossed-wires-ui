import MenuBar from 'Components/MenuBar'
import './style.css'


class HudPage {
    view () {
        return m('.page', [
            m('hud.content', 'HUD'),
            m(MenuBar),
        ])
    }
}

export default HudPage
