//Criando um objeto 'car' com propriedades e métodos
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'Blue',
    //Método para exibir informações do carro
    displayInfo: function() {
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    },
    //Método para alterar a cor do carro
    painCar: function(newColor) {
        this.color = newColor
    }
};

//Acessando propriedades
console.log(car.make) //Saída: Toyota

//Chamando métodos
car.displayInfo() //Saída: Car: Toyota Corolla, Year: 2020, Color: Blue