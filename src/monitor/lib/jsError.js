import getLastEvent from "../util/getLastEvent"

export function injectJsError() {
  window.addEventListener('error', handleError, true)

  window.addEventListener('unhandledrejection', handleRejection, true)
}

function handleError(event) {
  debugger
  const lastEvent = getLastEvent()
  console.log(lastEvent)
}

function handleRejection(event) {}


function getLines(stack) {
  if (!stack) {
    return ''
  }
  return stack
    .split('\n')
    .splice(1)
    .map(item => item.replace(/^\s+at\s+/g, ''))
    .join('^')
}