const soma = (a,b) => a + b

console.log(soma(2,1))

const isPositive = number => number >= 0
console.log(isPositive(1))

let randomNumber = () => Math.random
console.log(randomNumber())

class Person {
    constructor(name){
        this.name = name
    }

    printNameArrow(){
        setTimeout(()=>{
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function(){
            console.log('Function: ' + this.name)
        },100)
    }
}

let person1 = new Person('Jon')
console.log(person1.printNameArrow())
console.log(person1.printNameFunction())
