/* const names = ['Nerius', 'Juana', 'Ruben', 'Kari']
const shortNames = names.filter(name => name.length <= 4)

console.log(shortNames);

const getCode = (address, callBack) => {
    setTimeout(() => {
        const data = {
            longitude: 0,
            latitude: 0
        }
        callBack(data)
    }, 2000)
}

getCode('Moa Cuba', (data) => {
    console.log(data)
}) */

/* setTimeout(() =>) */
//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (numberA, numberB,callback) => {
    setTimeout(() => {
        callback(numberA + numberB)
    }, 2000)
}

 add(1, 4, (sum) => {
     console.log(sum)
 })

 /*   setTimeout(() => {
    console.log('hello')
 }, 2000) */

 /* add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
}) */  