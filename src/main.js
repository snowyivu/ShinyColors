import transPhrase from './modules/phrase'
import watchText from './modules/text'
import requestHook from './modules/request'
import resourceHook from './modules/resourse'
import transScenario from './modules/scenario'
import addFont from './utils/fontFace'
import './utils/keepBgm'
import { log, sleep } from './utils/index'

const main = async () => {
  try {
    await Promise.all([
      resourceHook(),
      addFont(),
      transPhrase(),
      watchText(),
      requestHook(),
      transScenario()])
  } catch (e) {
    log(e)
  }
}

let waitCount = 0
const start = async () => {
  const win = window.unsafeWindow || window
  if (win._require || waitCount >= 300) {
    main()
  } else {
    await sleep(100)
    waitCount++
    if (waitCount % 10 === 0) log(`Waiting: ${waitCount / 10}s`)
    await start()
  }
}

if (window.unsafeWindow) {
  window.unsafeWindow.addEventListener('load', start)
} else {
  window.addEventListener('load', start)
}
