// se crean una clase donde defininifmo lo que contendtrmuestro objeto 
let person:{
    name: string;
    locatio: string;
    isProgrammer: boolean;
};

person = {
    name: 'Danny',
    locatio: 'mi casa',
    isProgrammer: true,
}
person.isProgrammer = false

console.log(person)

person = {
    name: 'Jomh',
    locatio: 'sdudamerica',
    isProgrammer: true
}

// interfaces 
// si queremso que varios obejto tenga las mismas caracterisicas C
 interface leng{
     Lenguege: string;
     framework: string;
     isGood: boolean;
 }

 let firstleng: leng = {
     Lenguege: 'Go',
     framework: 'fiber',
     isGood: true,
 }  
let secLeng: leng = {
    Lenguege: 'Rust',
    framework: 'Rocket',
    isGood: true
}
console.log(firstleng, secLeng)

// interfaces con fucntiones 
interface Speech{
    sayHi(name: string): string;
    sayBye:(name: string) => string; //<- se le iniploca a las interfaces que es lo que contentra mi clase sayBye
}
let sayStuff: Speech = {
    sayHi: function(name: string){
	return `Hi ${name}`;
    },
    sayBye: (name:string)=> `Bye ${name}`
}

console.log(sayStuff.sayHi('new partener'));
console.log(sayStuff.sayBye('Jaziel'));

interface lenguas{
    lenguaje(name: string): string;
    tipo:(name: string) => string;
}
let chooseLen: lenguas = {
    lenguaje: function(name: string){
	return `${name}`;
    },
    tipo:(name: string) => `Soy un len${name}`, 
} 

console.log(chooseLen.lenguaje('Rust'));
console.log(chooseLen.tipo('Compilado'))
