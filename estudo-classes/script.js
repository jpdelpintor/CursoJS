/* class animais {
    constructor (especie, genero){
        this.tipo = especie
        this.sexo = genero
    }

    //Métodos getters
    get pegarSexo (){
        return this.sexo
    }
    get pegarTipo (){
        return this.tipo
    }
    //Métodos setters
     set mudarSexo (novoSexo){
        this.sexo = novoSexo
    }
    set mudarTipo (novoTipo){
        this.tipo = novoTipo
    }

}

class cachorro extends animais{
    constructor (especie, genero){
        super(especie, genero)
    }
}

const mulan = new cachorro('vira-lata', 'feminino')
mulan.mudarSexo = 'fêmea'
mulan.mudarTipo = 'cachorro'
console.log(mulan.pegarSexo)
console.log(mulan.pegarTipo)

const animal1 = new animais('leao','masculino')

animal1.mudarSexo = 'feminino'
animal1.mudarTipo = 'girafa' */



/* class artigo {
    constructor(titulo, data){
        this.titulo = titulo
        this.data = data
    }

    //Método estático
    static comparar (artigoAnterior, artigoPosterior){
        return artigoAnterior.data - artigoPosterior.data
    }
}

const artigos = [
    new artigo('HTML', new Date(2019, 1, 1)),
    new artigo('CSS', new Date(2019, 0, 1)),
    new artigo('JavaScript', new Date(2019, 11, 1))
]
console.log(artigos)
const artigosSorteados = [...artigos].sort(artigo.comparar)
console.log(artigosSorteados) */

class profissional{
    constructor(nome, faculdade){
        this.nome = nome
        this.faculdade = faculdade
    }
    
}

class engenheiro extends profissional{
    constructor(nomeEng, faculEng,creaNumber){
        super(nomeEng, faculEng)
        this.crea = creaNumber
    }
}

//Utilizando objetos menores para compor outros objetos, fugindo da obrigação de herdar tudo que vem da classe pai ao utilizar o extends.
const validador = {
    validade: 'válido'
}

const avisador = {
    avisador () {
        return 'Válido'
    }
}



let profissional1 = new profissional('João Pedro', 'USP')
console.log(profissional1)

let engenheiro1 = new engenheiro('João Pedro', 'USP', 123)
console.log(engenheiro1)

let engenheiro2 = {...engenheiro1, ...validador, ...avisador}
console.log(engenheiro2)