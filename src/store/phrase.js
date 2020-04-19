import fetchData from '../utils/fetch'
import parseCsv from '../utils/parseCsv'
import { getLocalData, setLocalData } from './index'
import { trimWrap } from '../utils/index'
import tagText from '../utils/tagText'

const phraseMap = new Map()
let loaded = false

const getPhrase = async (full = false) => {
  if (!loaded) {
    let csv = await getLocalData('phrase')
    if (!csv) {
      csv = await fetchData('/data/phrase.csv')
      setLocalData('phrase', csv)
    }
    const list = parseCsv(csv)
    list.forEach(item => {
      if (item && item.name) {
        const _name = trimWrap(item.name)
        const _en = trimWrap(item.en, true)
        if (_name && (_en || full)) {
          phraseMap.set(_name, tagText(_en))
        }
      }
    })
    loaded = true
  }

  return phraseMap
}

export default getPhrase
