const chalk = require('chalk')
const validator = require('validator')
const notes = require('./note.js')
const yargs = require('yargs')
const { NOTFOUND } = require('dns')
const { arch, argv } = require('process')

//console.log(process.argv)
//Customize yargs version
yargs.version('1.1.0')


//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title that has removide',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List a sets of elements',
    handler() {
        console.log('Listing a set of elements')
    }
})

//Creat command to read
yargs.command({
    command: 'read',
    describe: 'Read element to the console',
    handler() {
        console.log('Reading element to the consoles')
    }
})

yargs.parse()

//console.log(yargs.argv)
//console.log(process.argv)



/* console.log(process.argv)
const command =process.argv[2]
console.log(command)
if(command === 'add'){
    console.log('adding note')
} else if (command === 'remove') {
    console.log('removing information')
} */