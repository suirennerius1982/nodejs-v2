const http = require('http')

const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/moa cuba.json?access_token=pk.eyJ1Ijoic3VpcmVubmVyaXVzMTk4MiIsImEiOiJja2JpYWEzb2EwMWtqMnJwZ2RxaXJiMzZvIn0.cEzTbT5h5NaJd81a2un-rw&limit=1`

const request = http.request(url, (response) => {
    let data = ''
    console.log(response.statusCode)
    console.log(response.statusMessage)
    
    response.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`)
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('Error ocurred: ' + error)
})

request.end()

