// Ae puede definir lo que contendra el array

/* Tipos de datos que puede contener  un arreglos*/
let ins: number[]
let ids: number[] = [1,2,3,4,5];
let names: string[] = ['Danny', 'Anna', 'Bazza'];
let options: boolean[] = [true, false, false]; 
let books: object[] = [
    { 
	name: 'Fooled by randomess',
	author: ' Nassim  Table',
    },
    {
	name: 'Sapiens',
	author: 'Yowal Noah Harak',
    },
];

let  arr: any[] = ['hello', 1, true];
ids.push(6);
console.log(ids, names, options, books, arr)
/*auqneu se anexar dieferentes tipos de contenido en el arreglos */ 
let person: (string | number | boolean)[] = ['Dany', 1, true];
person[0] = 100;

//SE PUED CREAR CON TUPLAS  

let persondos: [string, number, boolean] = ['Danny', 1, true];
persondos[1] = 100;
