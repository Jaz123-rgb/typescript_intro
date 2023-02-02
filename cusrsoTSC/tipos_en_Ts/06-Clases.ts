class Person {
	name:String;
	isCool: boolean;
	pets: number;

	constructor(n:string, c:boolean, p:number){
		this.name = n;
		this.isCool = c;
		this.pets = p;
	}

	sayHello(){
		return `Hi, my name is ${this.name} and i have ${this.pets} pets`
	}
}

const person1 = new Person('Danny', false, 1);
const person2 = new Person('Sarah', true, 6);

console.log(person1.sayHello());

let People: Person[] = [person1, person2]

console.log(People);
