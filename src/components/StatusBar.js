import m from 'mithril'

import './StatusBar.css'


class StatusBar {
    view () {
        return m('status', [
            m('.grow', 'Crossed Wires'),
            m('div', 'O'),
        ])
    }
}

export default StatusBar
