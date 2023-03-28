function adicionar(){
    let formNumero = window.document.getElementById('txtn')
    let res = window.document.getElementById('selectbox')
    
    let texto = res.options
    let alarmeNumerorep = false

    
    

    if (formNumero.value.length == 0 || Number(formNumero.value) < 1 || Number(formNumero.value) > 100){
        window.alert('Valor inadequado ou repetido!')
    } else if (res.length != 0){

        for (let i = 1; i <= res.length; i++){
            
            if(Number(texto.item(i-1).text.replace(/[A-Z,a-z]/g,'')) == Number(formNumero.value)){
                
                alarmeNumerorep = true
            } 
            
        }
        switch (alarmeNumerorep) {
            case true:
                window.alert('Valor inadequado ou repetido!')
                
                break;
        
            default:
                let item = window.document.createElement('option')
                item.text = `valor ${Number(formNumero.value)} adicionado`
                item.value = `item${res.length + 1}`
                res.appendChild(item)
                break;
        }
        

    } else{
        
        let item = window.document.createElement('option')
        item.text = `valor ${Number(formNumero.value)} adicionado`
        item.value = `item${res.length + 1}`
        res.appendChild(item)
    }
    formNumero.value = ''
    formNumero.focus()
    let respostaTexto = window.document.getElementById('resultadoFinal')
    if (respostaTexto != null){
        respostaTexto.remove()
    } 
    
}



function soma(array){
    let resultado = 0
    for(let i in array){
        resultado += array[i]

    }
    return resultado
}

function finalizar(){
    let formNumero = window.document.querySelector('input#txtn')
    let res = window.document.getElementById('res')
    let resTexto = window.document.getElementById('secaores')
    let caixaSelecao = window.document.getElementById('selectbox')
    let texto = caixaSelecao.options
    let listaNumeros = []

    //passando os options para um array, que vai conter apenas dados do tipo Number.
    

    if (texto.length == 0){
        window.alert('Não tem valor na caixa de seleção')
    } else {
        let respostaAntiga = window.document.getElementById('resultadoFinal')
        if (respostaAntiga !== null){
            respostaAntiga.remove()
        } 
        let respostaTexto =  window.document.createElement('div')
        respostaTexto.id = 'resultadoFinal'
        resTexto.appendChild(respostaTexto)
        
        
        for (let i = 1; i <= caixaSelecao.length; i++){
            listaNumeros[i-1] = Number(texto.item(i-1).text.replace(/[A-Z,a-z]/g,''))
            
        }
        
        
        respostaTexto.innerHTML = `Ao todo temos ${listaNumeros.length}<br>
                        O maior valor informado foi ${Math.max.apply(Math, listaNumeros)}<br>
                        O menor valor informado foi ${Math.min.apply(Math, listaNumeros)}<br>
                        Somando todos os valores, temos ${soma(listaNumeros)}<br>
                        A média dos valores digitados é ${soma(listaNumeros)/listaNumeros.length}`



    }
    formNumero.focus()

}



