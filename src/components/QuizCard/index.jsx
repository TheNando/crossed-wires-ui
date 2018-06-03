import m from 'mithril'

import { Firebase } from 'services/Data'
import './style.css'

const CompactComponent = () => <span>test</span>

const ExpandedComponent = question => (
  <div class="question-container">
    {/* Question */}
    <div class="text">{question.text}</div>

    {/* Choices */}
    {question.choices.map(option => (
      <div class="choice-container">
        <div class="text">{option}</div>
      </div>
    ))}
  </div>
)

class QuizCard {
  constructor() {
    this.selected = false
    this.question = {
      answer: '',
      category: '',
      choices: [],
      expires: 0,
      nextCategory: '',
      text: '',
    }
  }

  oninit() {
    this.pause = Firebase.doc('question', 'current').onSnapshot(
      doc => (this.question = doc.data()) && m.redraw()
    )
  }

  // suspend real-time updates when page is not in view
  onremove() {
    this.pause()
  }

  toggleSelect() {
    this.selected = !this.selected
  }

  view() {
    return (
      <quiz class="card" onclick={() => this.toggleSelect()}>
        {!this.selected ? ExpandedComponent(this.question) : CompactComponent()}
      </quiz>
    )
  }
}

export default QuizCard
