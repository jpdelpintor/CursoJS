var data = new Date()
var diaSemana = data.getDay()


/* Obs: No Javascript o getDay pega o dia da semana em números IntersectionObserver, seguindo a seguinte relação:

0 = Domingo
1 = Segunda-feira
2 = Terça-feira
3 = Quarta-feira
4 = Quinta-feira
5 = Sexta-feira
6 = Sábado */

switch (diaSemana){
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda-feira')
        break
    case 2:
        console.log('Hoje é Terça-feira')
        break
    case 3:
        console.log('Hoje é Quarta-feira')
        break
    case 4:
        console.log('Hoje é Quinta-feira')
        break
    case 5:
        console.log('Hoje é Sexta-feira')
        break
    case 6:
        console.log('Hoje é Sábado')
        break
    default:
        console.log('[ERROR]')
}

/* O default é semelhanto ao else no if. Não é obrigatório. O comando break não é obrigatório no default, já que é o último comando e logo sai do bloco. */