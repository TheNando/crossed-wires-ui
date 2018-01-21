import MenuBar from 'Components/MenuBar'
import './QuizPage.css'

import { Firebase } from 'Services/Data'

const DURATION = (20 * 1000)

class QuizPage {
    updateTimer () {
        const timeLeft = this.question.expires - (new Date()).getTime()
        const percent =  (timeLeft / DURATION) * 100
        this.timerElement.style.width = `${percent}%`
        this.stopTimer = window.requestAnimationFrame(this.updateTimer.bind(this))
    }

    oninit () {
        this.question = {
            answer: '',
            category: '',
            choices: [],
            expires: 0,
            nextCategory: '',
            text: '',
        }

        this.pause = Firebase.doc('question', 'current')
            .onSnapshot(doc => (this.question = doc.data()) && m.redraw())
    }

    oncreate (vnode) {
        this.timerElement = vnode.dom.querySelector('.count-down')
        this.updateTimer()
    }

    // suspend real-time updates when page is not in view
    onremove () {
        this.pause()
        window.cancelAnimationFrame(this.stopTimer)
    }

    view () {
        return m('.page', [
            m('quiz.content', [
                m('.question-container', [
                    m('.text', this.question.text),
                ]),
                m('.count-down'),
                this.question.choices.map(item => m('.choice-container', [
                    m('.text', item),
                ])),
            ]),
            m(MenuBar),
        ])
    }
}

export default QuizPage
