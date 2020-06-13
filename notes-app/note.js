const fileSystem = require('fs');
const { builtinModules } = require('module');
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

module.exports = getNotes