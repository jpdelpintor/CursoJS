/* function fatorial(n){
    let res = 1
    for(let i=1; i<n; i++){
        res*=(i+1)
    }
    return res
} 

console.log(fatorial(1)) */

/* Usando recursividade */

function fatorial(n){
    if (n == 1){
        return 1
    } else{
        return n*fatorial(n-1)
    }
    
} 
console.log(fatorial(1))