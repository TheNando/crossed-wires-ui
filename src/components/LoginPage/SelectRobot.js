import LoginMeta from '../../services/LoginMeta'

class SelectRobot {

    get selectedClass () {
        return '.selected-robot' + (this.showMenu ? '.hidden' : '')
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
            m('.selected-robot',
                { onclick: () => this.showMenu = true },
                [
                    m('span.team-color', {style:`background-color:${LoginMeta.selected.team}`}),
                    m('span.team-color', {style:`background-color:${LoginMeta.selected.colorHex}`}),
                    m('span.grow', LoginMeta.selected.name),
                    m('i.typcn.typcn-arrow-sorted-down'),
                ]
            ),
            m(this.menuClass,
                LoginMeta.robots.map(
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
