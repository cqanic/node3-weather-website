const request = require('request')

const forecast = (latitude, longitude, callback) => {
 const url = 'http://api.weatherstack.com/current?access_key=bd77ab65f8ec41c4b52e079caac89553&query=' + latitude + ',' +longitude + '&units=f'

  request({ url, json: true }, (error, {body}) => {
    if (error) {
        callback('unable to connect to weather service!', undefined)
    }else if (body.error) {
        callback('unable to find location', undefined)
    } else {
        callback(undefined,body.current.weather_descriptions[0] + ".It is currently" +body.current.temperature + "degress out, it feels like " + body.current.feelslike + " degress out.")
    }
    
  })
}

module.exports = forecast