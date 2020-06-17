const request = require('request')

const geocode = (address, callback) => {
    const urlGeo = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic3VpcmVubmVyaXVzMTk4MiIsImEiOiJja2JpYWEzb2EwMWtqMnJwZ2RxaXJiMzZvIn0.cEzTbT5h5NaJd81a2un-rw&limit=1`
    request({url: urlGeo, json: true}, (error, response) => {        
        if (error) {
            callback('Error ocurred. It\'s posiblie that conection not found!!!!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Not matching results', undefined)
        } else {
            const center = response.body.features[0].center
            //console.log(`Place name: ${response.body.features[0].place_name}: Latitude: ${center[1]}, Longitude X: ${center[0]}.`) 
            callback(undefined, {
                location: response.body.features[0].place_name,
                latitude: center[1],
                longitude: center[0]
            })
        }
    })
}

module.exports = geocode