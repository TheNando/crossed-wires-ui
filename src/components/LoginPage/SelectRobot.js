import m from 'mithril'
import Login from 'services/Login'

class SelectRobot {
  get menuClass() {
    return 'robots' + (this.showMenu ? '' : ' hidden')
  }

  selectRobot(index) {
    Login.selectRobot(index)
    this.showMenu = false
  }

  view() {
    return [
      <div class="selected-robot" onclick={() => (this.showMenu = true)}>
        <span
          class="team-color"
          style={{ 'background-color': Login.selected.team }}
        />
        <span
          class="team-color"
          style={{ 'background-color': Login.selected.colorHex }}
        />
        <span class="grow">{Login.selected.name}</span>
        <i class="typcn typcn-arrow-sorted-down" />
      </div>,
      <div class={this.menuClass}>
        {Login.robots.map((robot, index) => (
          <div class="robot" onclick={() => this.selectRobot(index)}>
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
      </div>,
    ]
  }
}

export default SelectRobot
