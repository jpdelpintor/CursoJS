function adicionar(){
    let formNumero = window.document.getElementById('txtn')
    let res = window.document.getElementById('selectbox')

    if (formNumero.value.length == 0){
        window.alert('Valor inadequado ou repetido!')
    } else if (res.length != 0){

        for (let i = 1; i <= res.length; i++){
            if(Number(res.value[i-1].replace(/\D/g, '')) == Number(formNumero.value)){
                window.alert(`Numeros iguais`)
            }
            
        }
    }
   
    

    //Verificando se o valor já está presente na SelectBox
    /* if(res.length != 0){
        for(let i = 1; i <= res.length; i++){
            if(Number(res.value[i-1].replace(/\D/g, '')) == Number(formNumero.value)){
                window.alert('Valor inadequado ou repetido!')
            }
            
        }
        let item = window.document.createElement('option')
        item.text = `valor ${Number(formNumero.value)} adicionado`
        item.value = `item${res.length + 1}`
        res.appendChild(item)
    } else{
        let item = window.document.createElement('option')
        item.text = `valor ${Number(formNumero.value)} adicionado`
        item.value = `item${res.length + 1}`
        res.appendChild(item)

    } */


    
    
}

