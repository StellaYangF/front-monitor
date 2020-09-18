const events = [ 'click', 'pointerdown', 'touchstart', 'mousedown', 'keydown', 'mouseover' ]

let lastEvent

events.forEach(event => {
  document.addEventListener(event, e => {
    lastEvent = e
  }, {
    capture: true,
    passive: true
  })
})


export default function() {
  return lastEvent
}