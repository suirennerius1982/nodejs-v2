const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=c18e921822266316d03de1ef9f4d6e2b&query=${latitude},${longitude}`
    request({url: url,json: true}, (error, response) => {
        if (error) {
            callback('Error ocurred. It\'s posiblie that conection not found!!!!', undefined)
        } else if (response.body.error) {
            callback(response.body.error, undefined)  
        } else {
            const currentWeather = response.body.current
            //`${currentWeather.weather_descriptions[0]}. ${response.body.location.country}-${response.body.location.name}: It\s currently ${currentWeather.temperature} degrees out. It\s a feel like ${currentWeather.feelslike} degrees out`
            callback(undefined, {
                weather: currentWeather.weather_descriptions[0],
                country: response.body.location.country,
                locality: response.body.location.name,
                temperature: currentWeather.temperature,
                windChillFactor: currentWeather.feelslike
            })
        }
    })
}

module.exports = forecast