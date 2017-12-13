import SelectRobot from './SelectRobot'

class Login {
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
            m('.handle', '{handle}'),
            m('button', 'Submit'),
        ])
    }
}

export default Login
