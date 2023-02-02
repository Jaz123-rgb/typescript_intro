var Person = /** @class */ (function () {
    function Person(n, c, p) {
        this.name = n;
        this.isCool = c;
        this.pets = p;
    }
    Person.prototype.sayHello = function () {
        return "Hi, my name is ".concat(this.name, " and i have ").concat(this.pets, " pets");
    };
    return Person;
}());
var person1 = new Person('Danny', false, 1);
var person2 = new Person('Sarah', true, 6);
console.log(person1.sayHello());
var People = [person1, person2];
console.log(People);
