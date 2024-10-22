export const loadExperience = async (url) => {
    const req = await fetch(url+'api/work/experience/')
    return await req.json()
}
const experienceAPI = {loadExperience:loadExperience}
export default experienceAPI;
