import SelectRobot from './SelectRobot'
import LoginMeta from '../../services/LoginMeta'
import './style.css'


class LoginPage {
    view () {
        return m('login.login-container', [
            m('.title', 'crossed wires'),
            m('label', [
                m('i.typcn.typcn-user'),
                m('input[type=email][placeholder=first.last][autofocus]'),
            ]),
            m('label', [
                m('i.typcn.typcn-group'),
                m(SelectRobot),
            ]),
            m('label', [
                m('i.typcn.typcn-tag'),
                m(`input[disabled][value=${LoginMeta.handle}]`),
            ]),
            m('button', 'submit'),
        ])
    }
}

export default LoginPage
