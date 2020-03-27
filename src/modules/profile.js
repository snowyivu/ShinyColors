import { getProfile } from '../store/profile'

let profilePrms = null;

const ensureProfile = async () => {
    if(!profilePrms) {
        profilePrms = getProfile();
    }
    return await profilePrms;
}
const transProfileProperty = (data, item, profile) => {
    if(item == "unit_name" && profile[item]) {
        data.unit.name = profile[item];
        return;
    }
    if(profile[item]) {
        data[item] = profile[item];
    }
}
const transProfile = (data, idolProfile) => {
    transProfileProperty(data, 'arm', idolProfile);
    transProfileProperty(data, 'birthDay', idolProfile);
    transProfileProperty(data, 'characterVoice', idolProfile);
    transProfileProperty(data, 'firstName', idolProfile);
    transProfileProperty(data, 'hobby', idolProfile);
    transProfileProperty(data, 'nameKana', idolProfile);
    transProfileProperty(data, 'place', idolProfile);
    transProfileProperty(data, 'arm', idolProfile);
    transProfileProperty(data, 'specialty', idolProfile);
    transProfileProperty(data, 'starSign', idolProfile);
    transProfileProperty(data, 'unit_name', idolProfile);
}
const idolProfiles = async (data) => {
    const profiles = await ensureProfile();
    if(data.name) {
      const idolProfile = profiles.get(data.name);
      transProfile(data, idolProfile)
    }
    if(data.beginnerMissionUnits) {
     data.beginnerMissionUnits.forEach( (unit) => {
         unit.idols.forEach( (idol) => {
             const idolProfile = profiles.get(idol.idol.character.name);
             transProfile(idol.idol.character, idolProfile);
         });
     });
    }
}

export { idolProfiles }
