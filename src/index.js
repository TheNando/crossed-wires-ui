import LoginForm from './components/LoginPage'

if (module.hot) {
    module.hot.accept()
}

if (process.env.NODE_ENV !== 'production') {
    console.log('In development mode!')
}

var IndexPage = require('../src/views/landing-page')
var Splash = require('../src/views/splash-page')

m.route(document.body.querySelector('#root'), '/login', {
    '/login': LoginForm,
    '/splash': Splash,
    '/index': IndexPage,
})
