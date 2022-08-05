var Hello = /** @class */ (function () {
    function Hello(message) {
        this.message = message;
    }
    Hello.prototype.saludos = function () {
        return "greetings" + this.message;
    };
    return Hello;
}());
var hola = new Hello(" Chanchito feliz");
console.log(hola.saludos());
