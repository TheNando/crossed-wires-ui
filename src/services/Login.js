import { Api, Storage } from 'Services/Data'

const Login = {
    enabled: false,
    index: 0,
    name: '',
    robots: [],
    showMenu: false,
    get selected () {
        return Login.robots.length ? Login.robots[Login.index] : {}
    },
    selectRobot (index) {
        Login.index = index
    },
    setName (value) {
        Login.name = value
        Login.enabled = !!value.match(/.+\..+/)
    },
    submit () {
        const payload = {
            name: Login.name,
            handle: Login.handle,
            robot: Login.selected.name,
            team: Login.selected.team,
        }
        Api.post('login', payload).then(response => {
            Storage.set('session', response)
            m.route.set('/')
        })
    },
}

Api.get('login').then(response => {
    Object.assign(Login, response)
    Login.robots = Login.robots.sort((r1, r2) => r1.team > r2.team)
})

export default Login
