const axios = require( "axios")
const { GOOGLE_API_KEY } = process.env


const ApiClient = axios.create({
    baseURL: `https://maps.googleapis.com/maps/api/geocode`
});


const getGeoLocation = async (jobsite) => {
    let addressURL = `/json?address=${jobsite.address_1},${jobsite.city},${jobsite.state}&key=${GOOGLE_API_KEY}`
    addressURL = encodeURI(addressURL)

    try {
        const res = await ApiClient.get(addressURL)
        return res.data
    } catch (error) {
        throw error
    }
}

module.exports = {
    getGeoLocation
}
