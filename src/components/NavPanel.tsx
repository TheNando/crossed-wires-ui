import m from 'mithril'

import Nav from '../services/Nav'
import '../styles/NavPanel.css'

class NavPanel {
  selectItem(event) {
    Nav.select(event.target.textContent)
  }

  view() {
    return (
      <nav>
        {Nav.itemsArray.map((item) => (
          <nav-item
            class={Nav.selectedClass(item.name)}
            onclick={this.selectItem}
          >
            {item.name}
          </nav-item>
        ))}
      </nav>
    )
  }
}

export default NavPanel
