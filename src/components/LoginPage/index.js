import SelectRobot from './SelectRobot'
import LoginMeta from '../../services/LoginMeta'

class LoginForm {
    view () {
        return m('login.login-container', [
            m('label', [
                'email',
                m('input[type=email][autofocus]'),
            ]),
            m('label', [
                'team',
                m(SelectRobot),
            ]),
            m('label', 'handle'),
            m('.handle', LoginMeta.handle),
            m('button', 'Submit'),
        ])
    }
}

export default LoginForm
