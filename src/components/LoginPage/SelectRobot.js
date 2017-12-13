import { transform, url } from '../../services/data'

class SelectRobot {
    constructor () {
        this.index = 0
        this.robots = []
        this.showMenu = false
    }

    oninit () {
        this.fetchRobots()
    }

    fetchRobots () {
        return m
            .request({
                method: 'GET',
                url: url + 'robots',
            })
            .then(transform)
            .then(response => this.robots = Object.values(response))
    }

    get selected () {
        return this.robots.length ? this.robots[this.index] : {}
    }

    get selectedClass () {
        return '.selected' + (this.showMenu ? '.hidden' : '')
    }

    get menuClass () {
        return '.robots' + (this.showMenu ? '' : '.hidden')
    }

    selectRobot (index) {
        this.index = index
        this.showMenu = false
        this.data = this.robots[this.index]
    }

    view () {
        return [
            m(this.selectedClass,
                { onclick: () => this.showMenu = true },
                [
                    m('span.team-color'),
                    m('span.team-color'),
                    this.selected.name,
                ]
            ),
            m(this.menuClass,
                this.robots.map(
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
