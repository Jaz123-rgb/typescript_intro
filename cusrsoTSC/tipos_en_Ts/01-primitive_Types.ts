// los tipos que tiene tscript
// string ,number ,bigint ,boolean ,undefined ,null , symbol 
let item:string = "hola";
let itmd:number = 12;
let itmt:bigint 
let itmc:boolean
let itms:undefined
let itmo:null
let itmsd:symbol

console.log(item, itmd, itmt, itmc, itms, itmo, itmsd)

// se declara el nombre de la variable y luego el tipo 

let id:number = 6;
let firtsname:string = 'Jazielsd';
let hasDog:boolean = true;

// Aunque se pueden declarar variables sin el declarar el 
// tipo de dato
let unir = 5;
console.log(id, firtsname, hasDog, unir)

//aunque se le puede asiganr doble tipo de datos en el caso
//de que se tenga que mutar

let age: string | number;
age = 26;
age = '22'
console.log(age)

let firtName = new String('Danny');
console.log(firtName);
/* al ser datod primitivo no se sobre escriben solo  son ttalamente independientes */
let x = 2;
let y = 1;

x = y
y = 100
console.log(x,y)
/*este no es caso cunado tienen un tipo como referencias
cusndi se habala de referencias se refieren a 
array
funciones
objetos
*/
let point1 = {x:1, y:1};
let point2 = point1;
point1.y = 100;
/* nos da como aoutppu la variables que modificamos previamente*/ 
console.log(point2, y)
