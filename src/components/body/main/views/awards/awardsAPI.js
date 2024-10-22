export const loadAwards = async (url) => {
    const req =  await fetch(url+'api/award/')
    return await req.json()
}
const awardsAPI = {loadAwards:loadAwards} 
export default awardsAPI