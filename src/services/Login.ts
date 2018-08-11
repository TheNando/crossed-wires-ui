import m from 'mithril'
import { Api, Storage, Cache } from './Data'

class Login {
  enabled = false
  handle = ''
  index = 0
  name = ''
  robot = null
  showMenu = false

  constructor() {
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
    ;(async () => {
      const response = await Api.get('login')
      Cache.timeOffset = new Date().getTime() - response.time
      Object.assign(this, response)
      this.robots = this.robots.sort((r1, r2) => (r1.team > r2.team ? 1 : -1))
      this.robot = this.robots[0]
    })()
  }

  selectRobot = (index) => {
    this.robot = this.robots[index]
  }

  setName = (value) => {
    this.name = value
    this.enabled = !!value.match(/.+\..+/)
  }

  submit = async () => {
    const payload = {
      name: this.name.toLowerCase(),
      handle: this.handle,
      robot: this.robot.name,
      team: this.robot.team,
    }

    const response = await Api.post('login', payload)

    Storage.set('session', response.session)
    m.route.set('/')
  }
}

export default new Login()
