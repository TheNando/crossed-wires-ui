module.exports = (/*vnode*/) => ({
    oninit: (/*vnode*/) => console.log('initialized'),
    oncreate: (/*vnode*/) => console.log('DOM created'),
    onbeforeupdate: (/*vnode, old*/) => {
        console.log('onbeforeupdate')
        return true
    },
    onupdate: (/*vnode*/) => console.log('DOM updated'),
    onbeforeremove: (/*vnode*/) => {
        console.log('exit animation can start')
        return new Promise((resolve) => resolve())
    },
    onremove: (/*vnode*/) => console.log('removing DOM element'),
    view: (/*vnode*/) =>
        m('div', [
            m('h2', 'Congratulations, you made it!'),
            m('p', 'You\'ve spun up your very first Mithril app :-)'),
        ]),
})
