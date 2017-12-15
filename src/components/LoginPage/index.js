import SelectRobot from './SelectRobot'
import LoginMeta from '../../services/LoginMeta'
import './style.css'


class LoginPage {
    view () {
        return m('login.login-container', [
            m('label', [
                m('i.typcn.typcn-mail'),
                m('input[type=email][autofocus]'),
            ]),
            m('label', [
                m('i.typcn.typcn-group'),
                m(SelectRobot),
                m('i.typcn.typcn-arrow-sorted-down'),
            ]),
            m('label', 'handle'),
            m('.handle', LoginMeta.handle),
            m('button', 'Submit'),
        ])
    }
}

export default LoginPage
