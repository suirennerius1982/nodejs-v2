const fileSystem = require('fs')
const { setMaxListeners } = require('process')
const nameFile = 'notes.txt'
const codingString = 'utf8'
const fileNamesample = 'sample.txt'
try {
    fileSystem.writeFileSync(nameFile, 'My name is Nerius')
    fileSystem.appendFileSync(nameFile, 'Perez Toirac ', codingString)
    fileSystem.appendFileSync(nameFile, 'is begining deveop in node js, ', codingString)
    fileSystem.appendFileSync(nameFile, ' it\svery interthing', codingString)
} catch (error) {
    console.log(error)
}


try {
    fileSystem.readFile(fileNamesample, codingString, (err, data) => {
        if (err) throw err;
        console.log(data);
    })
} catch (error) {
    console.log(error);
} 