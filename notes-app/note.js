const fs = require('fs')
const { builtinModules } = require('module')
const { allowedNodeEnvironmentFlags } = require('process')
const chalk = require('chalk')


const nameFile = 'notes.txt'
const codingString = 'utf8'

const getNotes = function () {
    return 'Your notes';
    /* yn = fileSystem.readFile(nameFile, codingString, (err, data2) => {
        if (err) throw err;
        //console.log(data2);
        yn = data2;
        //console.log(yn);
        return yn;
    })  */
}

const addNote= function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    if (duplicateNotes.length === 0){
        console.log('here')
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.inverse.green('New note added!'))
    } else {
        console.log(chalk.inverse.red('Note tittle taken!'))
    } 
}

const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const removeNote = function(title) {
    const notes = loadNotes()
    const newArray = notes.filter(note => note.title !== title)
    if (notes.length > newArray.length) {
        saveNotes(newArray);    
        console.log(chalk.inverse.green('Note removed'))
    } else {
        console.log(chalk.inverse.red('Note not found'))
    }
}

const loadNotes = function (){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)        
    } catch (error) {
        return []     
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
