const fs = require('fs')
const { builtinModules } = require('module')
const { allowedNodeEnvironmentFlags } = require('process')
const chalk = require('chalk')


const nameFile = 'notes.txt'
const codingString = 'utf8'

const getNotes = () => {
    return 'Your notes';
    /* yn = fileSystem.readFile(nameFile, codingString, (err, data2) => {
        if (err) throw err;
        //console.log(data2);
        yn = data2;
        //console.log(yn);
        return yn;
    })  */
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)
    const existNote = notes.find(note => note.title === title)
    if (!existNote){
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

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const newArray = notes.filter(note => note.title !== title)
    if (notes.length > newArray.length) {
        saveNotes(newArray);    
        console.log(chalk.inverse.green('Note removed'))
    } else {
        console.log(chalk.inverse.red('Note not found'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)        
    } catch (error) {
        return []     
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => console.log(chalk.italic.yellow(note.title)))
}

const readNote = (title) => {
    const notes = loadNotes() 
    const note = notes.find(note => note.title === title)
    note ? console.log(chalk.inverse.green(`The note title is ${note.title} and the body is ${note.body}`)):console.log(chalk.inverse.red(`The note title ${title} it not found`))
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
