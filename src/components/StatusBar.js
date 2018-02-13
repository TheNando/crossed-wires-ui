import m from 'mithril'

import './StatusBar.css'

const DURATION = (20 * 1000)

class StatusBar {
    oncreate (vnode) {
        this.timerElement = vnode.dom.querySelector('.count-down')
        this.updateTimer()
    }

    updateTimer () {
        // const timeLeft = this.question.expires - Date.now()
        const timeLeft = Date.now()
        const percent =  (timeLeft / DURATION) * 100
        this.timerElement.style.width = `${percent}%`
        this.stopTimer = window.requestAnimationFrame(this.updateTimer.bind(this))
    }

    view () {
        return m('status', [
            m('.bar', [
                m('.grow', 'Crossed Wires'),
                m('.avatar', [
                    m('.badge', '50'),
                ]),
            ]),
            m('.count-down'),
        ])
    }
}

export default StatusBar
