const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const request = require('request')

const address = process.argv[2]

if (!address) {
    console.log('It\'s not prvided the address!!!')
} else {
    geocode(address, (error, {latitude = 'latitude', longitude = 'longitude'} = {}) => {
        if (error) {
            return console.log(error)
        } else {
            forecast(latitude, longitude, (errorForesCast, weatherObject) => {
                const {weather, country, locality, temperature, windChillFactor} = weatherObject
                if (errorForesCast) {
                    return console.log(errorForesCast)
                } else {
                    console.log(`Part weather in ${address} is ${weather}, in country ${country} 
                                 locality ${locality}. The temperature is: ${temperature} and the 
                                 windChillFactor ${windChillFactor}`)
                }
              })
        }
    })
}