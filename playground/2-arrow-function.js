/* const square = function(x) {
    return x * x;
} */

/* const square = (x) => {
    return x * x
} */
/* const square = (x) => x * x

console.log(square(3)) */

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log(`Gest list for ${this.name}`)
        this.guestList.forEach((gest) => {
            console.log(`${gest} is attending ${this.name}`)
        })
    } 
}

event.printGuestList()