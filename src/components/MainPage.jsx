import m from 'mithril'

import ExtractPanel from 'components/ExtractPanel'
import StatusBar from 'components/StatusBar'
import NavPanel from 'components/NavPanel'
import './MainPage.css'

class MainPage {
  view() {
    return (
      <main>
        <StatusBar />
        <ExtractPanel />
        <NavPanel />
      </main>
    )
  }
}

export default MainPage
