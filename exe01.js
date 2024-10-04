let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'Blue',
    mileage: 23000,
   
    drive: function(distance){
        this.mileage += distance
    },

    displayInfo: function() {
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}, Color: ${this.color}, Mileage: ${this.mileage} km`);
    },
    
    painCar: function(newColor) {
        this.color = newColor
    }
};

car.displayInfo();

car.drive(300);
console.log(car.mileage);
car.painCar('Red')
car.displayInfo();