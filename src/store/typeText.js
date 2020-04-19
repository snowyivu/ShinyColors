import fetchData from '../utils/fetch'
import parseCsv from '../utils/parseCsv'
import { getLocalData, setLocalData } from './index'
import { trimWrap } from '../utils/index'
import { getCommStory } from './story'

let typeTextMap = new Map()
let loaded = false

const getTypeTextMap = async () => {
  if (!loaded) {
    let csv = await getLocalData('type-text')
    if (!csv) {
      csv = await fetchData('/data/type-text.csv')
      setLocalData('type-text', csv)
    }
    const list = parseCsv(csv)
    list.forEach(item => {
      if (item && item.ja) {
        const _ja = trimWrap(item.ja)
        const _en = trimWrap(item.en, true)
        if (_ja && _en && _ja !== _en) {
          typeTextMap.set(_ja, _en)
        }
      }
    })
    const commStoryMap = await getCommStory()
    typeTextMap = new Map([...commStoryMap, ...typeTextMap])
    loaded = true
  }

  return typeTextMap
}

export default getTypeTextMap
