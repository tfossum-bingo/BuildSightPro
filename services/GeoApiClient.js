const axios = require( "axios")
const API_KEY='AIzaSyD85Z18nGa_s6LWTdVZCmozaVWFRqHM8KQ'


const ApiClient = axios.create({
    baseURL: `https://maps.googleapis.com/maps/api/geocode`
});


const getGeoLocation = async (jobsite) => {
    console.log('******Jobsite: ', jobsite)
    let addressURL = `/json?address=${jobsite.address_1},${jobsite.city},${jobsite.state}&key=${API_KEY}`
    addressURL = encodeURI(addressURL)

    console.log("GeoLocate Address: ", addressURL)
    try {
        const res = await ApiClient.get(addressURL)
        console.log('GeoLocate Response: ', res.data.results[0].geometry)
        return res.data
    } catch (error) {
        throw error
    }
}

module.exports = {
    getGeoLocation
}
