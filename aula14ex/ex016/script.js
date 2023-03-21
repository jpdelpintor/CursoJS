
function contar(){
    var inicio = window.document.getElementById('inputinicio')
    var fim = window.document.getElementById('inputfim')
    var passo = window.document.getElementById('inputpasso')
    var res = window.document.getElementById('res')
   
   
    var ini = Number(inicio.value)
    var fi = Number(fim.value)
    var pas = Number(passo.value)
    if(inicio.value.length == 0 || fim.value.length == 0){
        window.alert('[ERROR]Completar os campos, pois falta informação')
   

    } else if(ini < fi){
        var texto = 'Contando: '
        if(passo.value.length == 0 || pas == 0){
            pas = 1
            for(let i=ini; i <= fi; i+=pas){
         
                texto+= `${i} \u{1F449} `
            }
        }
        else{
            for(let i=ini; i <= fi; i+=pas){
         
                texto+= `${i} \u{1F449} `
            }

        }
        
        
    } else {
        var texto = 'Contando: '
        if(passo.value.length == 0 || pas == 0){
            pas = 1
            for(let i=ini; i >= fi; i-=pas){
                texto+= `${i} \u{1F449} `
            }
        } else{
            for(let i=ini; i >= fi; i-=pas){
                texto+= `${i} \u{1F449} `
            }
        }
        
    }


    res.innerHTML = texto + `\u{1FAF6}`
    
}




