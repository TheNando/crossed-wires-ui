import m from 'mithril'

import { Firebase } from '../services/Data'
import '../styles/ExtractPanel.css'

class ExtractPanel {
  pause: Function = () => null

  question = {
    answer: '',
    category: '',
    choices: [],
    expires: 0,
    nextCategory: '',
    text: '',
  }

  oninit() {
    this.pause = Firebase.doc('question', 'current').onSnapshot(
      (doc) => (this.question = doc.data()) && m.redraw()
    )
  }

  // suspend real-time updates when page is not in view
  onremove() {
    this.pause()
  }

  view() {
    const { question } = this

    return (
      <extract>
        {/* Question */}
        <div class="question">{question.text}</div>

        {/* Choices */}
        <div class="choices shadow-large">
          {question.choices.map((option) => (
            <div class="choice">
              <div class="choice-text">{option}</div>
            </div>
          ))}
        </div>
      </extract>
    )
  }
}

export default ExtractPanel
