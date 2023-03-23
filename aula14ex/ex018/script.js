function adicionar(){
    let formNumero = window.document.getElementById('txtn')
    let res = window.document.getElementById('selectbox')
    let texto = res.options
    let alarmeNumerorep = false

    

    if (formNumero.value.length == 0){
        window.alert('Valor inadequado ou repetido!')
    } else if (res.length != 0){

        for (let i = 1; i <= res.length; i++){
            
            if(Number(texto.item(i-1).text.replace(/\D/g,'')) == Number(formNumero.value)){
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
   
    
}

function finalizar(){
    let caixaSelecao = window.document.getElementById('selectbox')
    let texto = caixaSelecao.options

    if (texto.length == 0){
        window.alert('Não tem valor na caixa de seleção')
    } else {
        

    }
}



