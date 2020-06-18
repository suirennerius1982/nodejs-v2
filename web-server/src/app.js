const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Hello Word</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Nerius',
        lastNema: 'Perez',
        age: 37
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

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