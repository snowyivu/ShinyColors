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

let imageDataPrms = null
const ensureImage = async () => {
  if (!imageDataPrms) {
    imageDataPrms = getImage()
  }
  return await imageDataPrms
}

let replaced = false
export default async function resourceHook () {
  let aoba = await getAoba()
  if (!aoba || replaced) return
  const originLoadElement = aoba.loaders.Resource.prototype._loadElement
  const newLoadElement = async function (type) {
    try {
      const imageMap = await ensureImage()
      var originalUrl = this.url;
      if (type === 'image' && imageMap.has(this.name)) {
        const data = imageMap.get(this.name)
        if (this.url.endsWith(`v=${data.version}`)) {
          this.url = `${config.origin}/data/image/${data.url}?V=${config.hash}`
          this.crossOrigin = true
          if (DEV) {
            imageLog('IMAGE','#ed9636', this.name, originalUrl)
          }
        } else {
          if (DEV) {
            imageLog('IMAGE-MISMATCH','#ff0000', this.name, originalUrl)
          }
        }
      } else {
        if (DEV) {
          imageLog('IMAGE-MISSING','#ff0000', this.name, originalUrl)
        }
      }
    } catch (e) {

    }
    return originLoadElement.call(this, type)
  }
  const Resource = new Proxy(aoba.loaders.Resource, {
    construct(target, args, newtarget) {
        var newObj = Reflect.construct(target, args, newtarget);
        var overrodeObj = new Proxy(newObj, {
          get(target, name, receiver ) {
            if(name == '_loadElement') return newLoadElement;
            return Reflect.get(target, name, receiver);
          }
        });
        return overrodeObj;
    },
    get(target, name, receiver ) {
        return Reflect.get(target, name, receiver);
    }
  });
  Object.defineProperty(aoba.loaders,'Resource', {value: Resource});

  replaced = true
}
