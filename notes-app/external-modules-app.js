const chalk = require('chalk')
const validator = require('validator')
const add = require('./utils.js')
const getNotes = require('./note.js')

console.log('this is app.js that call to utils.js')
//console.log(name)
console.log(add(7, 7))
//console.log(getNotes())

console.log(validator.isEmail('nerius@gmail.example.com'))
console.log(validator.isURL('hteodofof'))
console.log(chalk.green('SUCCESS'), chalk.underline.bold.blue('hello'), chalk.inverse.yellow('It\'s yellow'))
console.log(process.argv[2])