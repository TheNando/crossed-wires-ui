const doc = window.document
const docEl = doc.documentElement

const requestFullScreen =
  docEl.requestFullscreen ||
  docEl.mozRequestFullScreen ||
  docEl.webkitRequestFullScreen ||
  docEl.msRequestFullscreen

const cancelFullScreen =
  doc.exitFullscreen ||
  doc.mozCancelFullScreen ||
  doc.webkitExitFullscreen ||
  doc.msExitFullscreen

const enterFullscreen = () => {
  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl)
  }
}

const exitFullscreen = () => cancelFullScreen.call(doc)

const isMobile = {
  Android: () => navigator.userAgent.match(/Android/i),

  BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),

  iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),

  Opera: () => navigator.userAgent.match(/Opera Mini/i),

  Windows: () =>
    navigator.userAgent.match(/IEMobile/i) ||
    navigator.userAgent.match(/WPDesktop/i),

  any: () =>
    isMobile.Android() ||
    isMobile.BlackBerry() ||
    isMobile.iOS() ||
    isMobile.Opera() ||
    isMobile.Windows(),
}

export { enterFullscreen, exitFullscreen, isMobile }
