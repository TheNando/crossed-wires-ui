import { Api, Session } from './Data'

class Login {
  enabled = false
  handle = ''
  index = 0
  name = ''
  robot = null
  robots = null
  showMenu = false

  constructor() {
    // get login meta
    ;(async () => {
      const response = await Api.get('login')
      // Session.timeOffset = new Date().getTime() - response.time
      Object.assign(this, response)
      this.robots = this.robots.sort((r1, r2) => (r1.team > r2.team ? 1 : -1))
      this.robot = this.robots[0]
    })()
  }

  selectRobot = (robot) => {
    this.robot = robot
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

    Session.set(response.session)
  }
}

export default new Login()
