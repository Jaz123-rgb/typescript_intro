// se crean una clase donde defininifmo lo que contendtrmuestro objeto 
var person;
person = {
    name: 'Danny',
    locatio: 'mi casa',
    isProgrammer: true
};
person.isProgrammer = false;
console.log(person);
person = {
    name: 'Jomh',
    locatio: 'sdudamerica',
    isProgrammer: true
};
var firstleng = {
    Lenguege: 'Go',
    framework: 'fiber',
    isGood: true
};
var secLeng = {
    Lenguege: 'Rust',
    framework: 'Rocket',
    isGood: true
};
console.log(firstleng, secLeng);
var sayStuff = {
    sayHi: function (name) {
        return "Hi ".concat(name);
    },
    sayBye: function (name) { return "Bye ".concat(name); }
};
console.log(sayStuff.sayHi('new partener'));
console.log(sayStuff.sayBye('Jaziel'));
var chooseLen = {
    lenguaje: function (name) {
        return "".concat(name);
    },
    tipo: function (name) { return "Soy un len".concat(name); }
};
console.log(chooseLen.lenguaje('Rust'));
console.log(chooseLen.tipo('Compilado'));
