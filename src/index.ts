import m from 'mithril'

import MainPage from './components/MainPage'
import LoginPage from './components/LoginPage'

import './app.css'
import './media/typicons.css'

if (module.hot) {
  console.log('HMR Enabled')
  module.hot.accept()
}

if (process.env.NODE_ENV !== 'production') {
  console.log('In development mode!')
}

m.route(document.body, '/login', {
  '/': MainPage,
  '/login': LoginPage,
})

if (window.localStorage.getItem('session')) {
  m.route.set('/')
} else {
  m.route.set('/login')
}
