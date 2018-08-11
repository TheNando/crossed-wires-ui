import m from 'mithril'

import ExtractPanel from './ExtractPanel'
import StatusBar from './StatusBar'
import NavPanel from './NavPanel'
import '../styles/MainPage.css'

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
