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
        //Verificando se o current está vazio, caso no qual só quero mudar a operação sem realizar cálculos.
        
        if (this.currentOperationText.innerText === '' && operation !=='C'){
            //Só mudar a operação se eu possuir algum valor no previous
            if (this.previousOperationText.innerText !== ''){
                this.changeOperation(operation)
            }
            return
        }
        let operationValue
        const previous = +this.previousOperationText.innerText.split(' ')[0]
        const current = +this.currentOperationText.innerText

        switch(operation){
            case '+':
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case '-':
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case '/':
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case 'X':
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case 'backspace':
                this.processDelOperator()
                break
            case 'CE':
                this.processClearCurrentOperation()
                break
            case 'C':
                this.processClearOperation()
                break
            case '=':
                this.processEqualOperator()
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
        
            if(operationValue === null){
                this.currentOperationText.innerText += this.currentOperation
            } else{
                //verificando se previous é zero, se for apenas adicionar valor atual
                if(previous === 0){
                    operationValue = current
                }

                //Adicionando current value no previous
                this.previousOperationText.innerText = `${operationValue} ${operation}`
                this.currentOperationText.innerText = ''
            }
    }

    //Mudando operações matemáticas
    changeOperation(operation){
        const mathOperations = ['X', '/', '+', '-']

        if(!mathOperations.includes(operation)){
            return
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation
    }

    //Deletendo dígitos um a um
    processDelOperator(){
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0,-1)
    }

    //Apagando todo o conteúdo 
    processClearCurrentOperation(){
        this.currentOperationText.innerText = ''
    }

    //Apagando todo o conteúdo dos dois campos
    processClearOperation(){
        this.currentOperationText.innerText = ''
        this.previousOperationText.innerText = ''
    }

    //Operador de igual, para lançar o resultado ao ser acionado
    processEqualOperator(){
        const operation = this.previousOperationText.innerText.split(' ')[1]

        this.processOperation(operation)
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