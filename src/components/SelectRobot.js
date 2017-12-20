import Login from '../services/Login'


class SelectRobot {

    get menuClass () {
        return '.robots' + (this.showMenu ? '' : '.hidden')
    }

    selectRobot (index) {
        Login.selectRobot(index)
        this.showMenu = false
    }

    view () {
        return [
            m('.selected-robot',
                { onclick: () => this.showMenu = true },
                [
                    m('span.team-color', {style:`background-color:${Login.selected.team}`}),
                    m('span.team-color', {style:`background-color:${Login.selected.colorHex}`}),
                    m('span.grow', Login.selected.name),
                    m('i.typcn.typcn-arrow-sorted-down'),
                ]
            ),
            m(this.menuClass,
                Login.robots.map(
                    (robot, index) => m('.robot',
                        { onclick: () => this.selectRobot(index) },
                        [
                            m('span.team-color', {style:`background-color:${robot.team}`}),
                            m('span.team-color', {style:`background-color:${robot.colorHex}`}),
                            m('span', robot.name),
                        ]
                    )
                )
            ),
        ]
    }
}

export default SelectRobot
