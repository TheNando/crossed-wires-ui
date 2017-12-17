import MenuBar from 'Components/MenuBar'
import './style.css'

class HomePage {
    view () {
        return m('.page', [
            m('.content'),
            m(MenuBar),
        ])
    }
}

export default HomePage
