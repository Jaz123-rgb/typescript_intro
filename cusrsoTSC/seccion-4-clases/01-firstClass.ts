class carro{
    //*inicirlizamos los paramteor de la funion qu estamos recibiendo 
    brand: string
    date:string
    doors: number
    //? el metodo controcotr sirve para cada vex que se crea 
    constructor(brand_:string,date_:string, doors_: number ){
        this.brand = brand_
        this.date = date_
        this.doors = doors_
    }
    //Metodos lo que peude hacver a calase
    acelerar():void{
        console.log('Acelerar');
    }
    frenar():void{
        console.log('Frenar');

    }
}


const car = new carro('Fotd', '12/12/2020', 12)
console.log(car.brand)
car.frenar()