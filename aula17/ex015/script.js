function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERROR] Verificar os dados inseridos')
    } else{
       var sex = document.getElementsByName('radsex')
       var idade = ano - fano.value
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       
        

       if (sex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade <=10){
            img.setAttribute('src', 'foto-bebe-m.png')
        } else if(idade < 21){
            img.setAttribute('src', 'foto-jovem-m.png')
        } else if(idade < 50){
            img.setAttribute('src', 'foto-adulto-m.png')
        } else{
            img.setAttribute('src', 'foto-idoso-m.png')
        }
       } else if (sex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade <=10){
            img.setAttribute('src', 'foto-bebe-f.png')
        } else if(idade < 21){
            img.setAttribute('src', 'foto-jovem-f.png')
        } else if(idade < 50){
            img.setAttribute('src', 'foto-adulto-f.png')
        } else{
            img.setAttribute('src', 'foto-idoso-f.png')
        }
       }

       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }

}

