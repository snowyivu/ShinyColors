import fetchData from '../utils/fetch'
import parseCsv from '../utils/parseCsv'
import { getLocalData, setLocalData } from './index'
import { trimWrap } from '../utils/index'
import getItem from './item'
import getName from './name'

let commonMap = new Map()
let loaded = false

const getCommMap = async () => {
  if (!loaded) {
    let csv = await getLocalData('common')
    if (!csv) {
      csv = await fetchData('/data/common.csv')
      setLocalData('common', csv)
    }
    const list = parseCsv(csv)
    list.forEach(item => {
      if (item && item.ja) {
        const _ja = trimWrap(item.ja)
        const _en = trimWrap(item.en)
        if (_ja && _en && _ja !== _en) {
          commonMap.set(_ja, _en)
        }
      }
    })
    const { itemMap } = await getItem()
    const nameMap = await getName()
    commonMap = new Map([...itemMap, ...nameMap, ...commonMap])
    loaded = true
  }

  return commonMap
}

export default getCommMap
