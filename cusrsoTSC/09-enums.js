//? Crear un set de diferentes documentos basados numeros basado en stream 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 2] = "Up";
    Direction[Direction["Down"] = 23] = "Down";
    Direction[Direction["rigth"] = 34] = "rigth";
    Direction[Direction["left"] = 23] = "left";
    //* si no se le asigan un valor especfico lo toma como numero aparari del cero 
})(Direction || (Direction = {}));
var Strings;
(function (Strings) {
    Strings["uno"] = "UNO";
    Strings["dos"] = "DOS";
    Strings["tres"] = "VALS";
})(Strings || (Strings = {}));
console.log(Strings.tres);
