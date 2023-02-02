
//se recomieda evitar el tipo any para evitar bugs

let age:any = '100'
age = 100;
age = {
	years: 100,
	months: 2
}
// type  Aliase sirve para evitar el DRY(Dont Repeat Yourself)
type StringOrNumber = string | number;

type PersonObject = {
	name: string;
	id: StringOrNumber;
};

const person1: PersonObject = {
	name: 'John',
	id: 	1,
};

const person2: PersonObject = {
	name: 'Delia',
	id: 	2,
};
const sayHello = (person: PersonObject) => {
	 return 'Hi ' + person.name;
};

const sayGoodbye = (person: PersonObject) => {
	 return 'Seeya ' + person.name;
};

console.log(sayHello(person1))
