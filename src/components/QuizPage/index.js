import MenuBar from 'Components/MenuBar'
import './style.css'

import { Firebase } from 'Services/Data'

class QuizPage {
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
            .onSnapshot(doc => {
                this.question = doc.data()
                m.redraw()
            })
    }

    // suspend real-time updates when page is not in view
    onremove () {
        this.pause()
    }

    view () {
        return m('.page', [
            m('quiz.content', [
                m('.question-container', [
                    m('.text', this.question.text),
                ]),
                this.question.choices.map(item => m('.choice-container', [
                    m('.text', item),
                ])),
            ]),
            m(MenuBar),
        ])
    }
}

export default QuizPage
