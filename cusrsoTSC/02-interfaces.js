"use strict";
exports.__esModule = true;
function printLabel(obj) {
    if (obj.name)
        console.log(obj.name);
    console.log(obj.label);
}
var testObj = {
    secret: 23,
    label: 'prueba',
    name: 'im here'
};
testObj.label = 'mangos';
printLabel(testObj);
exports["default"] = {};
