import MenuBar from 'Components/MenuBar'
import './style.css'


class QuizPage {
    view () {
        return m('.page', [
            m('quiz.content', 'Quiz'),
            m(MenuBar),
        ])
    }
}

export default QuizPage
