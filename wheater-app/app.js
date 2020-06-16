console.log('Starting app')

setTimeout(() => {
    console.log('Sending message with time out in 2000 ms')
}, 2000)

setTimeout(() => {
    console.log('Sending second message with timeout in 0 ms')
})

console.log('Stoping app')