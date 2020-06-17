const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c18e921822266316d03de1ef9f4d6e2b&query=20.63972,-74.9175'

 request({url: url,json: true}, (error, response) => {
     if (error) {
         console.log('Error ocurred. It\'s posiblie that conection not found!!!!')
     } else if (response.body.error) {
        console.log(response.body.error)  
     } else {
        const currentWeather = response.body.current
        console.log(`${currentWeather.weather_descriptions[0]}. ${response.body.location.country}-${response.body.location.name}: It\s currently ${currentWeather.temperature} degrees out. It\s a feel like ${currentWeather.feelslike} degrees out`)
     }
})

const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Moa Cuba.json?access_token=pk.eyJ1Ijoic3VpcmVubmVyaXVzMTk4MiIsImEiOiJja2JpYWEzb2EwMWtqMnJwZ2RxaXJiMzZvIn0.cEzTbT5h5NaJd81a2un-rw&limit=1'
//const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1Ijoic3VpcmVubmVyaXVzMTk4MiIsImEiOiJja2JpYWEzb2EwMWtqMnJwZ2RxaXJiMzZvIn0.cEzTbT5h5NaJd81a2un-rw&limit=1'

request({url: urlGeo, json: true}, (error, response) => {
    debugger
    
    if (error) {
        console.log('Error ocurred. It\'s posiblie that conection not found!!!!')
    } else if (response.body.features.length === 0 || response.body.features[0].center.length === 0) {
        console.log('Not matching results')
    } else {
        const center = response.body.features[0].center
        console.log(`Place name: ${response.body.features[0].place_name}: Latitude: ${center[1]}, Longitude X: ${center[0]}.`) 
    }
}) 