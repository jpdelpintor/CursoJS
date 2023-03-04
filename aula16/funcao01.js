function parImpar(n){
    if (n%2 == 0){
        return 'Par'
    } else{
        return 'Ímpar'
    }
}

console.log(parImpar(3))
let numero = parImpar(44)
console.log(`O número 44 é ${numero}`)