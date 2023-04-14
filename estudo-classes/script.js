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

const animal1 = new animais('leao','masculino')

animal1.mudarSexo = 'feminino'
animal1.mudarTipo = 'girafa'

console.log(animal1.pegarSexo)
console.log(animal1.pegarTipo) */

class artigo {
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
console.log(artigosSorteados)