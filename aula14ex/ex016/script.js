
function contar(){
    var inicio = window.document.getElementById('inputinicio')
    var fim = window.document.getElementById('inputfim')
    var passo = window.document.getElementById('inputpasso')
    var res = window.document.getElementById('res')
   
   
    var ini = Number(inicio.value)
    var fi = Number(fim.value)
    var pas = Number(passo.value)
    if(inicio.value.length == 0 || fim.value.length == 0){
        res.innerHTML = `Impossível contar!`
   

    } else if(ini < fi){
        var texto = 'Contando:<br>'
        if(passo.value.length == 0 || pas == 0){
            pas = 1
            
        }
        for(let i=ini; i <= fi; i+=pas){
         
            texto+= `${i} \u{1F449} `
        }
        res.innerHTML = texto + `\u{1FAF6}`
        
        
    } else {
        var texto = 'Contando:<br>'
        if(passo.value.length == 0 || pas == 0){
            pas = 1
            
        } 
        for(let i=ini; i >= fi; i-=pas){
            texto+= `${i} \u{1F449} `
        }
        res.innerHTML = texto + `\u{1FAF6}`
        
    }


    
    
}




