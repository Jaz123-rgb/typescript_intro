//se recomieda evitar el tipo any para evitar bugs
var age = '100';
age = 100;
age = {
    years: 100,
    months: 2
};
var person1 = {
    name: 'John',
    id: 1
};
var person2 = {
    name: 'Delia',
    id: 2
};
var sayHello = function (person) {
    return 'Hi ' + person.name;
};
var sayGoodbye = function (person) {
    return 'Seeya ' + person.name;
};
console.log(sayHello(person1));
