/*Son os paramettros que por implemetacion dentro de nuestro poyectos
podemos o no tener
// ?S queremos agragr un dato opcionales sin que nos cause problemas solo agrega ? el eltipo
//? de datoa llamar
 s
*/
var opcionales = function (name, last_name, edad) {
    if (edad) {
        console.log("se llama ".concat(name, " su apellido es ").concat(last_name, " y su edad ").concat(edad));
    }
    else {
        console.log("se llama ".concat(name, " su apellido es ").concat(last_name, " y no dijo edad"));
    }
};
opcionales('Liss', "Perez", 123);
opcionales('breda', "Perez");
