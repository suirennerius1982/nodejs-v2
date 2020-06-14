const chalk = require('chalk')
const validator = require('validator')
const getNotes = require('./note.js')
const yargs = require('yargs')

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
    handler: function (argv) {
        console.log('Adding a new note!!! ' + argv.title)
        console.log('The body operator is: ' + argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List a sets of elements',
    handler: function () {
        console.log('Listing a set of elements')
    }
})

//Creat command to read
yargs.command({
    command: 'read',
    describe: 'Read element to the console',
    handler: function () {
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