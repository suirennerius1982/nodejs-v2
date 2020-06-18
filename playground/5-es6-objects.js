//Object properties shorthan

const name = 'Nerius'
const age = 37

const user = {
    name: name,
    age: age,
    location: 'Moa-Cuba'
}

const namePet = 'Puchito'
const color = 'white'
const agePet = 3

const pet = {
    namePet,
    color: color,
    agePet
}

console.log(user)
console.log(pet)

//destructuring

const product = {
    label: 'short',
    colorProduct: 'red',
    price: 35.20,
    stock: 100
}

const {label, colorProduct, price, stock} = product

console.log(`${label}-${colorProduct}-${price}-${stock}`)

const trasaction = (type, {label, colorProduct, price, stock}) => {
    console.log(`It\s the case of pass parame: ${type}-${label}-${colorProduct}-${price}-${stock}`)
}

trasaction('order', product)