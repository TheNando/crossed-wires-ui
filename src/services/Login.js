import m from 'mithril'
import { Api, Storage, Cache } from 'services/Data'

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
            Storage.set('session', response.session)
            m.route.set('/')
        })
    },
}

// Check for existing session and cache if found
const { id, user } = Storage.get('session') || {}
Cache.sessionId = id

if (user) {
    Cache.name = user.name
    Cache.handle = user.handle
    Cache.robot = user.robot
    Cache.team = user.team
}

// get login meta
(async () => {
    const response = await Api.get('login')
    Cache.timeOffset = (new Date()).getTime() - response.time
    Object.assign(Login, response)
    Login.robots = Login.robots.sort((r1, r2) => r1.team > r2.team)
})()

export default Login
