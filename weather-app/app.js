const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const request = require('request')

const address = process.argv[2]

if (!address) {
    console.log('It\'s not prvided the address!!!')
} else {
    geocode(address, (error, data) => {
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
    })
}