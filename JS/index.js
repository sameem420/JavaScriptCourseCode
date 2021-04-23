
class Car {
    constructor(a, b) {
        // this.Name = "CIVIC"
        // this.Model = Model
        this.a = "CIVIC"
        this.b = 2010
        this.xyz = "ABC"
    }

    display() {
        console.log(`This is ${this.Name} Car. and Its model is ${this.Model} ${this.xyz}`)
        // console.log("This is " + this.Name + " Car. and Its model is " + this.Model )
    }

}

class Honda extends Car {
    
    constructor(Name, Model) {
        super()
        this.Name = "Honda"
        this.Model = Model
    }
    
}

let obj = new Honda(undefined, 2015)

console.log(obj.Name)
console.log(obj.Model)
console.log(obj.xyz)
console.log(obj.display())

// let text = "Hello World"
// let sentence = `Hello
// World`

// console.log(text)
// console.log(sentence)




























// let Names = ["Ali", 4, true, false]

// const Car = {
//     name : 'Honda',
//     model: 2010,
// }

// function myFunc(fruit1, fruit2 , ...Fruits) {
//     // console.log(fruit)
//     for (let i of Fruits)
//         console.log(i)

// }


// const Fruits = ['Apple', 'Mango', 'Orange', 'Banana']
// myFunc(...Fruits)


// Names = [...Names, ...Fruits]
// console.log(Names)


// let [ Name, ...restValues ] = Names

// let { name, model } = Car

// console.log(name)
// console.log(Car.name)

// for (let i of Names) {
//     console.log()
// }

// Names.forEach((val) => {
//     console.log(val)
// })




// const Add = () => {

// }

// const Add = function() {

// }

// function Add() {

// }