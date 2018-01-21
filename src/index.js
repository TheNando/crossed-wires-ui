import m from 'mithril'
import 'babel-polyfill'

import HudPage from 'components/HudPage'
import EngagePage from 'components/EngagePage'
import QuizPage from 'components/QuizPage'
import BuyPage from 'components/BuyPage'
import LoginPage from 'components/LoginPage'

import './app.css'
import './media/typicons.css'


if (module.hot) {
    module.hot.accept()
}

if (process.env.NODE_ENV !== 'production') {
    console.log('In development mode!')
}

m.route(document.getElementById('root'), '/login', {
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
