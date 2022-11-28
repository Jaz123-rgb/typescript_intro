/*Parametros por defecto esto son si tiene algun paramentro inicializado
y se va a sobre esscribir cuando lames a la funciones*/
var shows = function (name, las_na, age) {
    if (age === void 0) { age = 32; }
    return "".concat(name, " + ").concat(las_na, " + ").concat(age);
};
console.log(shows('Jaziel', 'Perz', 123));
console.log(shows('JUan', 'Luis', 12));
