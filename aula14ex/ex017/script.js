function calcular(){
    let numeroForm = window.document.getElementById('txtnumber')
    let res = window.document.getElementById('selectbox')
    numero = Number(numeroForm.value)
    let i = 1
   
    

    if(numeroForm.value.length == 0){
        window.alert('Preencher o campo com um número')
    } else{
        res.innerHTML = ''
        do {
            let item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero*i}`
            item.value = `tab${i}`
            res.appendChild(item)
            i++
        } while (i <= 10);
    }

    

}

