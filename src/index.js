import LoginPage from './components/LoginPage'
import './media/typicons.css'

if (module.hot) {
    module.hot.accept()
}

if (process.env.NODE_ENV !== 'production') {
    console.log('In development mode!')
}


m.route(document.body.querySelector('#root'), '/login', {
    '/login': LoginPage,
})
