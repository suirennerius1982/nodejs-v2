const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Anyel'
data.planet = 'Heart'
data.age = 38
const jsonToWrite = JSON.stringify(data)
fs.writeFileSync('1-json.json', jsonToWrite)
console.log("Data save: " + jsonToWrite)
//read content anyway
const dataBuffer2 = fs.readFileSync('1-json.json')
const jsonString = dataBuffer2.toString()
console.log("New Json saved in the file system: " + jsonString)