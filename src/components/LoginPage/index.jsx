import m from 'mithril'

import SelectRobot from 'components/LoginPage/SelectRobot'
import Login from 'services/Login'
import './style.css'

class LoginPage {
  view() {
    return (
      <login>
        <div class="title">crossed wires</div>
        <label class="shadow rounded">
          <i class="typcn typcn-user" />
          <input
            type="text"
            placeholder="first.last"
            autofocus
            oninput={m.withAttr('value', Login.setName)}
            value={Login.name}
          />
        </label>
        <label class="shadow rounded">
          <i class="typcn typcn-group" />
          <SelectRobot />
        </label>
        <label class="shadow rounded">
          <i class="typcn typcn-tag" />
          <input value={Login.handle} disabled />
        </label>
        <button class="shadow" disabled={!Login.enabled} onclick={Login.submit}>
          submit
        </button>
      </login>
    )
  }
}

export default LoginPage
