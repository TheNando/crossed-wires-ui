import m from 'mithril'
import { Api, Storage, Cache } from './Data'

class Login {
  enabled = false
  handle = ''
  index = 0
  name = ''
  robots = [] as Array<Robot>
  showMenu = false

  constructor() {
    // Check for existing session and cache if found
    const { id, user }: Session = Storage.get('session') || {}
    Cache.sessionId = id

    if (user) {
      Cache.name = user.name
      Cache.handle = user.handle
      Cache.robot = user.robot
      Cache.team = user.team
    }

    // get login meta
    ;(async () => {
      const response = (await Api.get('login')) as ApiLogin
      Cache.timeOffset = new Date().getTime() - response.time
      Object.assign(Login, response)
      this.robots = this.robots.sort((r1, r2) => (r1.team > r2.team ? 1 : -1))
    })()
  }

  get selected() {
    return this.robots.length ? this.robots[this.index] : ({} as Robot)
  }

  selectRobot(index) {
    this.index = index
  }

  setName(value) {
    this.name = value
    this.enabled = !!value.match(/.+\..+/)
  }

  async submit() {
    const payload = {
      name: this.name,
      handle: this.handle,
      robot: this.selected.name,
      team: this.selected.team,
    }

    const response = (await Api.post('login', payload)) as ApiLogin

    Storage.set('session', response.session)
    m.route.set('/')
  }
}

export default new Login()
