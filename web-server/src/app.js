const express = require('express')
const path = require('path')

const app = express()
/* console.log(__dirname)
console.log(__filename) */

const publicDirectoryPath = path.join(__dirname, '../public')
//console.log(express.static(publicDirectoryPath))

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        weather: 'Partly cloudy',
        country: 'Cuba',
        locality: 'La Veguita',
        temperature: 31,
        windChillFactor: 39
    })
})

//http://app.com
//http://app.com/help
//http://app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000!!!')
})