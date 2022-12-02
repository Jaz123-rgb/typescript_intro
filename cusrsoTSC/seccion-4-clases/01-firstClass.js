var carro = /** @class */ (function () {
    //? el metodo controcotr sirve para cada vex que se crea 
    function carro(brand_, date_, doors_) {
        this.brand = brand_;
        this.date = date_;
        this.doors = doors_;
    }
    //Metodos lo que peude hacver a calase
    carro.prototype.acelerar = function () {
        console.log('Acelerar');
    };
    carro.prototype.frenar = function () {
        console.log('Frenar');
    }; 
    return carro;
}());
var car = new carro('Fotd', '12/12/2020', 12);
console.log(car.brand);
car.frenar();
