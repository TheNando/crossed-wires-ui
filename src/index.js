import HomePage from 'Components/HomePage'
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
    '/': HomePage,
    '/login': LoginPage,
})

if (localStorage.session) {
    m.route.set('/')
} else {
    m.route.set('/login')
}
