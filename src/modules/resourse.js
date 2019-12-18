import { log } from '../utils/index'
import getImage from '../store/image'
import config from '../config'
import { getAoba } from './get-module'

const logStyles = color => ([
  `background-color:${color};color:#fff;padding:0 0.3em`,
  '',
  `color:${color};text-decoration:underline`
])

const imageLog = (method, color, path, url) => {
  if (DEV) {
    log(`%c${method}%c %c${path}`, ...logStyles(color), '\n=>', url)
  }
}

let replaced = false
export default async function resourceHook () {
  let aoba = await getAoba()
  if (!aoba || replaced) return
  const originLoadElement = aoba.loaders.Resource.prototype._loadElement
  aoba.loaders.Resource.prototype._loadElement = async function (type) {
    if (DEV && type === 'image' ) {
      imageLog('IMAGE','#ed9636', this.name, this.url)
    }
    try {
      const imageMap = await getImage()
      if (type === 'image' && imageMap.has(this.name)) {
        const data = imageMap.get(this.name)
        if (this.url.endsWith(`v=${data.version}`)) {
          this.url = `${config.origin}/data/image/${data.url}?V=${config.hash}`
          this.crossOrigin = true
        } else {
          log('%cimage version not match', 'color:#fc4175')
        }
      }
    } catch (e) {

    }
    return originLoadElement.call(this, type)
  }
  replaced = true
}
