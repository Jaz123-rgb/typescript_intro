// los tipos que tiene tscript
// string ,number ,bigint ,boolean ,undefined ,null , symbol 
var item = "hola";
var itmd = 12;
var itmt;
var itmc;
var itms;
var itmo;
var itmsd;
console.log(item, itmd, itmt, itmc, itms, itmo, itmsd);
// se declara el nombre de la variable y luego el tipo 
var id = 6;
var firtsname = 'Jazielsd';
var hasDog = true;
// Aunque se pueden declarar variables sin el declarar el 
// tipo de dato
var unir = 5;
console.log(id, firtsname, hasDog, unir);
//aunque se le puede asiganr doble tipo de datos en el caso
//de que se tenga que mutar
var age;
age = 26;
age = '22';
console.log(age);
var firtName = new String('Danny');
console.log(firtName);
/* al ser datod primitivo no se sobre escriben solo  son ttalamente independientes */
var x = 2;
var y = 1;
x = y;
y = 100;
console.log(x, y);
/*este no es caso cunado tienen un tipo como referencias
cusndi se habala de referencias se refieren a
array
funciones
objetos
*/
var point1 = { x: 1, y: 1 };
var point2 = point1;
point1.y = 100;
/* nos da como aoutppu la variables que modificamos previamente*/
console.log(point2, y);
