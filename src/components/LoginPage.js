import SelectRobot from 'Components/SelectRobot'
import Login from 'Services/Login'
import './LoginPage.css'


class LoginPage {
    view () {
        return m('login', [
            m('.title', 'crossed wires'),
            m('label.shadow.rounded', [
                m('i.typcn.typcn-user'),
                m('input[type=text][placeholder=first.last][autofocus]', {
                    oninput: m.withAttr('value', Login.setName),
                    value: Login.name,
                }),
            ]),
            m('label.shadow.rounded', [
                m('i.typcn.typcn-group'),
                m(SelectRobot),
            ]),
            m('label.shadow.rounded', [
                m('i.typcn.typcn-tag'),
                m(`input[disabled][value=${Login.handle}]`),
            ]),
            m('button.shadow', {
                disabled: !Login.enabled,
                onclick: Login.submit,
            }, 'submit'),
        ])
    }
}

export default LoginPage
