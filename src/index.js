import HudPage from 'Components/HudPage'
import EngagePage from 'Components/EngagePage'
import QuizPage from 'Components/QuizPage'
import BuyPage from 'Components/BuyPage'
import LoginPage from 'Components/LoginPage'

import './app.css'
import './media/typicons.css'


if (module.hot) {
    module.hot.accept()
}

if (process.env.NODE_ENV !== 'production') {
    console.log('In development mode!')
}

m.route(document.body.querySelector('#root'), '/login', {
    '/': HudPage,
    '/hud': HudPage,
    '/engage': EngagePage,
    '/quiz': QuizPage,
    '/buy': BuyPage,
    '/login': LoginPage,
})

if (localStorage.session) {
    m.route.set('/')
} else {
    m.route.set('/login')
}
