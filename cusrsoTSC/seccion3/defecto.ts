/*Parametros por defecto esto son si tiene algun paramentro inicializado
y se va a sobre esscribir cuando lames a la funciones*/

const shows = (name:string, las_na:string, age:number = 32) =>{

    return `${name} + ${las_na} + ${age}`;
}
console.log(shows('Jaziel','Perz',123))

console.log(shows('JUan','Luis', 12))