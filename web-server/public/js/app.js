console.log('Javascript runnning in the client')

fetch('http://localhost:3000/weather?address=sagua%tanamo%cuba').then((res) => {
    res.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else (
            console.log(data)
        )
    }) 
})