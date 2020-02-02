import { getStoryTitle } from '../store/story-title';
import config, { saveConfig } from '../config'
import CSV from 'papaparse';
import { tryDownload } from '../utils/index'


let storyTitlePrms = null;

const ensureStoryTitle = async () => {
   if(!storyTitlePrms) {
       storyTitlePrms = getStoryTitle();
   }
   return await storyTitlePrms;
}

const transStoryTitle = (item, key, storyTitles) => {
    if(item && item[key]) {
        const originalName = item[key];
        if(storyTitles.has(originalName)) {
            item[key] = storyTitles.get(originalName);
        }
    }
}
const storyTitles = async (data) => {
    const storyTitles = await ensureStoryTitle();
    const storyTitleList = [];
    if(data.communications) {
        data.communications.forEach(item => {
	    storyTitleList.push({title: item.title, trans: "" });
            transStoryTitle(item, 'title',storyTitles);
        });
    }
    if (data.idol && data.idol.produceIdolEvents) {
      data.idol.produceIdolEvents.forEach(item => {
        storyTitleList.push({title: item.title, trans: "" });
        transStoryTitle(item, 'title',storyTitles);
      })
      data.idol.produceAfterEvents.forEach(item => {
        storyTitleList.push({title: item.title, trans: "" });
        transStoryTitle(item, 'title',storyTitles);
      })
    }
    if (data.supportIdol && data.supportIdol.produceSupportIdolEvents) {
      data.supportIdol.produceSupportIdolEvents.forEach(item => {
        storyTitleList.push({title: item.title, trans: "" });
        transStoryTitle(item, 'title',storyTitles);
      })
    }
    if (data.gameEvents) {
      data.gameEvents.forEach(events => {
        events.communications.forEach(item => {
          storyTitleList.push({title: item.title, trans: "" });
          transStoryTitle(item, 'title',storyTitles);
        })
      })
    }
    if (data.specialEvents) {
      data.specialEvents.forEach(events => {
        events.communications.forEach(item => {
          storyTitleList.push({title: item.title, trans: "" });
          transStoryTitle(item, 'title',storyTitles);
        })
      })
    }
    console.log(config.commuTitle);
    console.log(storyTitleList);
    if(config.commuTitle == "download") {
        const str = CSV.unparse(storyTitleList)
        tryDownload(str, `commuTitles`)
        config.commuTitle = 'normal'
        saveConfig()
    }
    console.log("beep boop this is log, with data ensured");
}

export { storyTitles }
