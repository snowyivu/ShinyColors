import fetchData from '../utils/fetch'
import parseCsv from '../utils/parseCsv'
import { getLocalData, setLocalData } from './index'
import { trim } from '../utils/index'

const ignoreImageMap = new Map()
let ignoreLoaded = false

const getIgnoreImage = async () => {
	if(!ignoreLoaded) {
		let csv = await getLocalData('ignoreimage')
		if(!csv) {
			csv = await fetchData('/data/ignoreimage.csv')
			setLocalData('ignoreimage', csv)
		}
		const list = parseCsv(csv)
		list.forEach(item => {
      if (item && item.name) {
        const name = trim(item.name)
        const version = trim(item.version) || '1'
        if (name) {
          ignoreImageMap.set(name, { version } )
        }
      }
    })
    ignoreLoaded = true
	}
	
	return ignoreImageMap
}

export default getIgnoreImage
