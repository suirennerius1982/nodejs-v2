const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


const geocode = (address, error) => {
    if (error) {
        return console.log(error)
    } else {
        forecast(data.latitude, data.longitude, (errorForesCast, dataForesCast) => {
            if (errorForesCast) {
                return console.log(errorForesCast)
            } else {
                console.log('Data', dataForesCast)
            }
          })
    }
}

module.exports = {
    getWeather: getWeather
} 