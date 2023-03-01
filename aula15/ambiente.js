let num = [2,4,5,6,1,0]
num.push(45)
num.sort(sortNumbers)

/* Formas de usar estruturas de repetição para percorrer arrays */
/* for(let pos = 0; pos < num.length; pos++){
    console.log(`Este elemento tem índice ${pos} e valor ${num[pos]}`)
}  */

/* for(let i in num){
    console.log(`Este elemento tem índice ${i} e valor ${num[i]}`)
} */

let index = num.indexOf(45)
if(index == -1){
    console.log(`Este número não está prsente no Array`)
} else {
    console.log(`O número escolhido está na posição ${index} do Array`)
}

function sortNumbers(a,b){
    if(a > b){
        return 1
    } else if(b > a){
        return -1
    } else{
        return 0
    }
}