import m from 'mithril'

import Nav from '../services/Nav'
import './NavPanel.css'

class NavPanel {
  view() {
    return (
      <nav>
        {Nav.items.map((item) => (
          <nav-item class={Nav.selectedClass(item.name)}>{item.name}</nav-item>
        ))}
      </nav>
    )
  }
}

export default NavPanel
