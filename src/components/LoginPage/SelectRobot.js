import LoginMeta from '../../services/LoginMeta'

class SelectRobot {

    get selectedClass () {
        return '.selected' + (this.showMenu ? '.hidden' : '')
    }

    get menuClass () {
        return '.robots' + (this.showMenu ? '' : '.hidden')
    }

    selectRobot (index) {
        LoginMeta.selectRobot(index)
        this.showMenu = false
    }

    view () {
        return [
            m(this.selectedClass,
                { onclick: () => this.showMenu = true },
                [
                    m('span.team-color'),
                    m('span.team-color'),
                    LoginMeta.selected.name,
                ]
            ),
            m(this.menuClass,
                LoginMeta.robots.map(
                    (robot, index) => m('.robot',
                        { onclick: () => this.selectRobot(index) },
                        [
                            m('span.team-color', robot.team),
                            m('span.team-color', robot.colorHex),
                            robot.name,
                        ]
                    )
                )
            ),
        ]
    }
}

export default SelectRobot
