const yargs = require('yargs')
const weather = require('./weather.js')

yargs.command({
    command: 'weather',
    describe: 'specific the locality that you need know the weather',
    builder: {
        locality: {
            describe: 'locality to search weather',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        weather.getWeather(argv.locality)
    }
})

yargs.parse()