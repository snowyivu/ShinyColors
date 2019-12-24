import autoTrans from '../utils/translation'
import fetchData from '../utils/fetch'
import CSV from 'papaparse';
import { log, log2, replaceWrap, tryDownload, sleep } from '../utils/index'
import config, { saveConfig } from '../config';

const autoTransText = async (data, key = 'comment') => {
  const name = data.map(item => item[key]).join('').trim()
  await autoTrans(data, name, true)
}

const transText = async (data, key = 'comment') => {
  const name = data.map(item => item[key]).join('').trim()
  const testData = data.map(item => item[key])
  await autoTrans(data, name, true, true)
}

const idolMemoryAppealComments = async (data) => {
  if (data.idolMemoryAppealComments) {
    await autoTransText(data.idolMemoryAppealComments)
  }
}

const auditionKeys = [
  'actionComment', 'actionComment2', 'reactionComment',
  'resultLoseComment', 'resultStartComment', 'resultWinComment'
]
const produceAudition = async (data) => {
  try {
    if (data.produceAudition) {
      let name = data.produceAudition.judges.map(item => {
        return auditionKeys.map(key => item[key] || '').join('')
      }).join('').trim()
      await autoTrans(data.produceAudition.judges, name, true)
    }
    if (data.produceConcert) {
      let name = data.produceConcert.judges.map(item => {
        return auditionKeys.map(key => item[key] || '').join('')
      }).join('').trim()
      await autoTrans(data.produceConcert.judges, name, true)
    }
  } catch (e) {
    log(e)
  }
}

const fesMatchConcert = async (data) => {
  if (data.judges) {
    let name = data.judges.map(item => {
      return auditionKeys.map(key => item[key] || '').join('')
    }).join('').trim()
    await autoTrans(data.judges, name, true)
  }
}

const mypageComments = async (data) => {
  try {
    let list = []
    let homeDeckList = {}
    if (data.userHomeDeck.userHomeDeckAnimationMember) {
      list = [...data.userHomeDeck.userHomeDeckAnimationMember.mypageComments]
    }
    let animeMembers = data.userHomeDeck.userHomeAnimationDeck.userHomeAnimationDeckMembers
    if (animeMembers) {
      animeMembers.forEach(member => {
        member.mypageComments.forEach(comm => {
          list.push(comm)
        })
      })
    }
    if (data.userHomeDeck.userHomeDeckMembers.length) {
      data.userHomeDeck.userHomeDeckMembers.forEach(async member => {
        member.mypageComments.forEach(async comm => {
          list.push(comm)
          Object.keys(comm).forEach(async item => {
            let keyIdol = comm[item]
            if (item === 'speakerName') {
              const isExist = Object.keys(homeDeckList).some(key => {
                return key === comm[item]
              })
              if (!isExist) {
                homeDeckList[keyIdol] = []
              }
              homeDeckList[keyIdol].push(comm)
            }
          })

        })
      })

    }
    if (config.myPage === 'multiple') {
      Object.keys(homeDeckList).forEach(key => {
        const wrapComment = homeDeckList[key].map(item => {
          return replaceWrap(item['comment'])
        })
        const jsonCsv = wrapComment.map(item => {
          return { 'jp': item, 'zh': '' }
        })
        const str = CSV.unparse(jsonCsv)
        tryDownload(str, `${homeDeckList[key][0].speakerName}-myPageComments`)
      })
      config.myPage = 'normal'
      saveConfig()
    } else if (config.myPage === 'single') {
      const wrapList = list.map(item => {
        return { name: item['speakerName'], comment: replaceWrap(item['comment']) }
      })
      const jsonCsv = wrapList.map(item => {
        return { name: item.name ,'jp': item.comment, 'zh': '' }
      })
      const str = CSV.unparse(jsonCsv)
      tryDownload(str, `deckMember-myPageComments`)
      config.myPage = 'normal'
      saveConfig()
    }
    await transText(list)
  } catch (e) {
    log(e)
  }
}

const fesDeckReactions = async (data) => {
  if (!data.userFesDeck) return
  try {
    let list = []
    let members  = data.userFesDeck.userFesDeckMembers
    for (let member of members) {
      member.fesTopCharacterReactions.forEach(item => {
        list.push(item)
      })
    }
    await autoTransText(list)
  } catch (e) {
    log(e)
  }
}

const produceHints = async (data) => {
  if (data.produceHints) {
    await transText(data.produceHints, 'text')
  }
}

const topCharacterReaction = async (data) => {
  if (!data.topCharacterReaction) return
  try {
    const list = [
      ...data.topCharacterReaction.moveReactions,
      ...data.topCharacterReaction.skillReleasedReactions,
      ...data.topCharacterReaction.touchExReactions,
      ...data.topCharacterReaction.touchReactions,
      ...data.topCharacterReaction.waitReactions
    ]
    await autoTransText(list)
  } catch (e) {
    log(e)
  }
}

const lessonResult = async (data) => {
  if (!data.lessonResult) return
  let lr = data.lessonResult
  try {
    let list = []
    if (lr.produceActCutinComment) list = list.concat(lr.produceActCutinComment)
    // if (lr.produceActIdolComment) list = list.concat(lr.produceActIdolComment)
    // if (lr.produceActSupportIdolComments) list = list.concat(lr.produceActSupportIdolComments)
    if (lr.produceRestBoostIdolComment) list = list.concat(lr.produceRestBoostIdolComment)
    if (lr.produceRestBoostSupportIdolComment) list = list.concat(lr.produceRestBoostSupportIdolComment)
    if (lr.produceRestComments) list = list.concat(lr.produceRestComments)
    await autoTransText(list)
  } catch (e) {
    log(e)
  }
}

const produceEndWeek = async (data) => {
  let staff = data.produceStaffComments || []
  let concert = data.produceStaffConcertComments || []
  let fail = data.produceStaffFailComments || []
  let season = data.produceStaffSeasonComments || []
  let list = [...staff, ...concert, ...fail, ...season]
  await autoTransText(list)
}

const resumeGamedata = async (data) => {
  if (!data.gameData) return
  try {
    let gData = JSON.parse(data.gameData)
    if (gData.judges) {
      await fesMatchConcert(gData)
    } else {
      await produceAudition(gData)
    }
    data.gameData = JSON.stringify(gData)
  } catch (e) {
    log(e)
  }
}

const characterComment = async (data) => {
  if (!data.characterComment) return
  let list = []
  list = list.concat(data.characterComment)
  await autoTransText(list)
}

const helperSupportIdols = async (data) => {
  try {
    let name = data.characterComment + data.producerComment
    await autoTrans([data], name, true)
  } catch (e) {
    log(e)
  }
}

const produceReporterAnswer = async (data) => {
  try {
    let revent = data.produceReporterEvent
    if (revent && revent.produceReporterEventAnswers) {
      await autoTransText(revent.produceReporterEventAnswers, 'comment2')
    }
  } catch (e) {
    log(e)
  }
}

const trustLevelUp = async (data) => {
  try {
    let list = data.characterTrustLevelUpComments
    await autoTransText(list)
  } catch (e) {
    log(e)
  }
}

export {
  mypageComments,
  fesDeckReactions,
  idolMemoryAppealComments,
  produceAudition,
  produceHints,
  topCharacterReaction,
  lessonResult,
  produceEndWeek,
  resumeGamedata,
  characterComment,
  fesMatchConcert,
  helperSupportIdols,
  produceReporterAnswer,
  trustLevelUp
}