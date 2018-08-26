import m from 'mithril'

import { Session } from '../services/Data'
import LoginPage from './LoginPage'
import ExtractPanel from './ExtractPanel'
import StatusBar from './StatusBar'
import NavPanel from './NavPanel'
import '../styles/MainPage.css'

class MainPage {
  view() {
    return Session.id ? (
      <main>
        <StatusBar />
        <ExtractPanel />
        <NavPanel />
      </main>
    ) : (
      <LoginPage />
    )
  }
}

export default MainPage
