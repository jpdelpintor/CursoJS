//Selecionando elementos do DOM
const previousOperationText = document.querySelector('div#operacao-anterior')
const currentOperationText = document.querySelector('div#operacao-atual')
const buttons = window.document.querySelectorAll("#calculadora button")

class Calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ""
    }

    addDigit(digit){
        //Evitando que o usuário digite mais de um ponto
        if(digit === ',' && this.currentOperationText.innerText.includes(',')){
            return
        }

        this.currentOperation = digit
        this.updateScreen()

    }

    
    //Processando as operações
    processOperation(operation){
        let operationValue
        const previous = +this.previousOperationText.innerText
        const current = +this.currentOperationText.innerText

        switch(operation){
            case '+':
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break
            default:
                break

        }

    }

    //Adicionar os valores na tela da calculadora
    updateScreen(
        operationValue = null, 
        operation=null, 
        current=null, 
        previous = null){
        this.currentOperationText.innerText += this.currentOperation
    }

}

const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText
        
        //Separando número e ponto de operação
        if (+value >= 0 || value === ','){
            calc.addDigit(value)
        } else{
            calc.processOperation(value)
        }
    })
})