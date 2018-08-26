import m from 'mithril'

import { Api, Firebase, getText } from '../services/Data'
import '../styles/ExtractPanel.css'

class ExtractPanel {
  pause: Function = () => null

  question = {
    answer: '',
    category: '',
    choices: [],
    nextCategory: '',
    text: '',
  }

  oninit() {
    this.pause = Firebase.doc('question', 'current').onSnapshot((doc) => {
      // const { answer, ...question } = doc.data()
      // this.question = question
      this.question = doc.data()
      m.redraw()
    })
  }

  // suspend real-time updates when page is not in view
  onremove() {
    this.pause()
  }

  submitAnswer(event) {
    const answer = getText(event)

    Api.post('answer', { answer })
  }

  view() {
    const { question, submitAnswer } = this

    return (
      <extract>
        {/* Question */}
        <div class="question">{question.text}</div>

        {/* Choices */}
        <div class="choices shadow-large">
          {question.choices.map((option) => (
            <div class="choice" onclick={submitAnswer}>
              <div class="choice-text">
                {question.answer === option && '*'}
                {option}
              </div>
            </div>
          ))}
        </div>
      </extract>
    )
  }
}

export default ExtractPanel
