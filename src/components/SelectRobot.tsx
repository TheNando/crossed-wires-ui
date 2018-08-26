import m from 'mithril'

import Login from '../services/Login'
import '../styles/SelectRobot.css'

class SelectRobot {
  displayMenu = false

  get menuClass() {
    return 'robots' + (this.displayMenu ? '' : ' hidden')
  }

  selectRobot = (index) => {
    Login.selectRobot(index)
    this.displayMenu = false
  }

  toggleMenu = () => {
    this.displayMenu = !this.displayMenu
  }

  view() {
    const { robots, robot } = Login

    if (!robots) {
      return (
        <div class="selected-robot">
          <span class="grow" />
          <i class="typcn typcn-arrow-sorted-down" />
        </div>
      )
    }

    const teamColor = { 'background-color': robot.team }

    return (
      <section class="grow">
        {/* Selected Robot */}
        <div class="selected-robot" onclick={this.toggleMenu}>
          <span class="team-color" style={teamColor} />
          <span
            class="team-color"
            style={{ 'background-color': robot.colorHex }}
          />
          <span class="grow">{robot.name}</span>
          <i class="typcn typcn-arrow-sorted-down" />
        </div>

        {/* All Robots Options */}
        <div class={this.menuClass}>
          {robots.map((robot, index) => (
            <div class="robot" onclick={() => this.selectRobot(robot)}>
              <span
                class="team-color"
                style={{ 'background-color': robot.team }}
              />
              <span
                class="team-color"
                style={{ 'background-color': robot.colorHex }}
              />
              <span>{robot.name}</span>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default SelectRobot
