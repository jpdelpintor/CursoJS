function fatorial(n){
    for(let i=1; i<n; i++){
        n*=(n-1)
    }
    return n
}

console.log(fatorial(3))