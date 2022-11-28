/*Parametros indefinidos dentro de un string*/
var catapost = function (dessert) {
    var fruits = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fruits[_i - 1] = arguments[_i];
    }
    console.log("The dessert is ".concat(dessert, ", and has [ ").concat(fruits, " ]"));
};
catapost('Desss_1', 'orange', 'banana', 'strawberry', 'grapes');
