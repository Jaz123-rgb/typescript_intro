//? I give the principla characreres into a new class, called public, and i can put this class in every clas that i wont
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, size) {
        this.size = size;
        this.name = name;
    }
    Animal.prototype.isBIg = function () {
        if (this.size > 10) {
            return true;
        }
        else {
            return false;
        }
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name, size) {
        return _super.call(this, name, size) || this;
    }
    return Snake;
}(Animal));
var snake = new Snake(" a su madre ", 200);
console.log(snake.isBIg(), snake.name);
