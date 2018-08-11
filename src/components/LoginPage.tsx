import m from 'mithril'

import SelectRobot from './SelectRobot'
import Login from '../services/Login'
import '../styles/LoginPage.css'

class LoginPage {
  view() {
    const { enabled, handle, name, setName, submit } = Login
    console.log('Rendering LoginPage')

    return (
      <login>
        <div class="title">crossed wires</div>
        <label class="shadow rounded">
          <i class="typcn typcn-user v-center" />
          <input
            type="text"
            placeholder="first.last"
            autofocus
            oninput={m.withAttr('value', setName)}
            value={name}
          />
        </label>
        <label class="shadow rounded">
          <i class="typcn typcn-group" />
          <SelectRobot />
        </label>
        <label class="shadow rounded">
          <i class="typcn typcn-tag" />
          <input value={handle} disabled />
        </label>
        <button class="shadow" disabled={!enabled} onclick={submit}>
          submit
        </button>
      </login>
    )
  }
}

export default LoginPage
