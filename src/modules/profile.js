import { getProfile } from '../store/profile'

let profilePrms = null;

const ensureProfile = async () => {
    if(!profilePrms) {
        profilePrms = getProfile();
    }
    return await profilePrms;
}
const transProfile = (data, item, profile) => {
    if(item == "unit_name" && profile[item]) {
        data.unit.name = profile[item];
        return;
    }
    if(profile[item]) {
        data[item] = profile[item];
    }
}

const idolProfiles = async (data) => {
    const profiles = await ensureProfile();
    const idolProfile = profiles.get(data.name);
    transProfile(data, 'arm', idolProfile);
    transProfile(data, 'birthDay', idolProfile);
    transProfile(data, 'characterVoice', idolProfile);
    transProfile(data, 'firstName', idolProfile);
    transProfile(data, 'hobby', idolProfile);
    transProfile(data, 'nameKana', idolProfile);
    transProfile(data, 'place', idolProfile);
    transProfile(data, 'arm', idolProfile);
    transProfile(data, 'specialty', idolProfile);
    transProfile(data, 'starSign', idolProfile);
    transProfile(data, 'unit_name', idolProfile);

}

export { idolProfiles }
