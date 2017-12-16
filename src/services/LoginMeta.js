import { Api } from './data'

const LoginMeta = {
    index: 0,
    robots: [],
    showMenu: false,
    get selected () {
        return this.robots.length ? this.robots[this.index] : {}
    },
    selectRobot (index) {
        this.index = index
        this.data = this.robots[this.index]
    },
}

Api.request('login').then(response => {
    Object.assign(LoginMeta, response)
    LoginMeta.robots = LoginMeta.robots.sort((r1, r2) => r1.team > r2.team)
})

export default LoginMeta
