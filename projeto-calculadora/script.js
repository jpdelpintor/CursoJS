//Selecionando elementos do DOM
const selecaoAtual = window.document.querySelector("div#selecao-atual")
const selecaoAnterior = window.document.querySelector("div#selecao-anterior")
const buttons = window.document.querySelectorAll("#calculadora button")

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText
        
        //Separando número e ponto de operação
        if (+value >= 0 || value === ','){
            console.log(`Valor numério: ${value}`)
        } else{
            console.log(`Operação: ${value}`)
        }
    })
})