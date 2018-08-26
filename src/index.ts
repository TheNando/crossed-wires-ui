import m from 'mithril'

import MainPage from './components/MainPage'

import './app.css'
import './media/typicons.css'

if (module.hot) {
  console.log('HMR Enabled')
  module.hot.accept()
}

if (process.env.NODE_ENV !== 'production') {
  console.log('In development mode!')
}

m.mount(document.body, MainPage)
