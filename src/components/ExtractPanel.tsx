import m from 'mithril'

import { Api, Firebase, getData, Session } from '../services/Data'
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
    const answer = parseInt(getData(event, 'index'), 10)
    Api.post('answer', { answer, robot: Session.robot })
    event.redraw = false
  }

  view() {
    const { question, submitAnswer } = this
    const answerStyle = (index) => (question.answer === index ? ' answer' : '')

    return (
      <extract>
        {/* Question */}
        <div class="question">{question.text}</div>

        {/* Choices */}
        <div class="choices shadow-large">
          {question.choices
            .map((option, index) => (
              <div class="choice" onclick={submitAnswer} data-index={index}>
                <div class={'choice-text' + answerStyle(index)}>{option}</div>
              </div>
            ))
            .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))}
        </div>
      </extract>
    )
  }
}

export default ExtractPanel
