const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello express.')
})

app.get('/help', (req, res) => {
    res.send('help endpoint.')
})

app.get('/about', (req, res) => {
    res.send('About title page.')
})

app.get('/weather', (req, res) => {
    res.send('Weather page title.')
})

//http://app.com
//http://app.com/help
//http://app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000!!!')
})