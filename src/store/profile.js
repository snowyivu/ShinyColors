import fetchData from '../utils/fetch'
import parseCsv from '../utils/parseCsv'
import { trimWrap, trim } from '../utils/index'
import { getLocalData, setLocalData } from './index'

const profileMap = new Map()
let profileLoaded = false

const getProfile = async () => {
    if (!profileLoaded) {
        let csv = await getLocalData('profile')
        if (!csv) {
          csv = await fetchData('/data/profile.csv')
          setLocalData('profile', csv)
        }
        const list = parseCsv(csv)
        list.forEach(item => {
          const name = trim(item.name);
          if (name) {
            profileMap.set(name, item);
          }
        })
        profileLoaded = true
  }
  return profileMap
}

export { getProfile }
