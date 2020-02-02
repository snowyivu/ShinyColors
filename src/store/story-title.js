import fetchData from '../utils/fetch'
import parseCsv from '../utils/parseCsv'
import { trimWrap, trim } from '../utils/index'
import { getLocalData, setLocalData } from './index'

const storyTitleMap = new Map()
let storyTitleLoaded = false

const getStoryTitle = async () => {
    if (!storyTitleLoaded) {
        let csv = await getLocalData('story-title')
        if (!csv) {
          csv = await fetchData('/data/story-title.csv')
          setLocalData('story-title', csv)
        }
        const list = parseCsv(csv)
        list.forEach(item => {
          const title = trim(item.title)
          const trans = trim(item.trans)
          if (title && trans && title !== trans) {
            storyTitleMap.set(title, trans)
          }
        })
    storyTitleLoaded = true
  }

  return storyTitleMap
}

export { getStoryTitle }
