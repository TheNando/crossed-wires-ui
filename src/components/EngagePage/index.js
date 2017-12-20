import MenuBar from 'Components/MenuBar'
import './style.css'


class EngagePage {
    view () {
        return m('.page', [
            m('engage.content', 'Engage'),
            m(MenuBar),
        ])
    }
}

export default EngagePage
