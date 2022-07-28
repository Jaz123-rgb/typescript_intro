"use strict";
//funciones con nombre o nombaradda 
exports.__esModule = true;
function fun1(x, y) {
    return x + y;
}
// FUncion anonima
var fun2 = function (x, y) {
    return x + y;
};
// arrow function
var fun3 = function (x, y) {
    return x + y;
};
console.log(fun1(2, 3));
console.log(fun2(2, 3));
console.log(fun3(2, 3));
exports["default"] = {};
