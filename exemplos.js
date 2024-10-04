//Criando um objeto 'caminhao'
let caminhao = {
    marca: 'Volkswagen',        //Propriedade: chave é 'marca', valor é 'Volkswagen'
    modelo: 'Constellation',    //Propriedade: chave é 'modelo', valor é 'Constellation'
    ano: 2024,                  //Propriedade: chave é 'ano', valor é 2024
    cor: 'prata',               //Propriedade: chave é 'cor', valor é 'prata'
    cabine: [
        {tipo: 'simples', capacidade: 2, teto: 'fechado'},
        {tipo: 'dupla', capacidade: 5},
    ],

    //Método: define uma função associada ao objeto
    ligar: function() {
        console.log('O caminhão está ligado.')
    },
    desligar: function() {
        console.log('O caminhão está desligado.')
    }
}

//Acessando propriedades do objeto
console.log(caminhao.marca);    //Saída: Volkswagen
console.log(caminhao['ano'], caminhao['modelo']);    //Saída: 2024
console.log(caminhao.cabine[0])

//Chamando o método do objeto
caminhao.ligar(); //Saída: O caminhão está ligado.