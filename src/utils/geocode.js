const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiY3FhbmljIiwiYSI6ImNsNGR5a3czbDBkNHkza3FoNGI1aXk5aXYifQ.q8p8-b0EJ4ot78w3-zBGKQ&limit=1'
  
    request({ url, json: true }, (error,{body}) => {
      if(error) {
        callback('unable to connect to location services!', undefined)
      }else if (body.features.length === 0) {
        callback('unable to find location try another search.', undifined)
      } else{
        callback(undefined, {
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name
        })
      }
    })
  }
  module.exports = geocode