import m from 'mithril'

import QuizCard from 'components/QuizCard'
import StatusBar from 'components/StatusBar'
import './MainPage.css'

class MainPage {
  view() {
    return (
      <main class="page">
        <StatusBar />
        <QuizCard />
      </main>
    )
  }
}

export default MainPage
