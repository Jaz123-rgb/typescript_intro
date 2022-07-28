"use strict";
//! Se agrega el signo de interrogacion "?"para hacer un parametro ocpcionale n typescirpt
exports.__esModule = true;
var funOpc = function (x, y) {
    if (y === void 0) { y = 0; }
    console.log(x, y);
};
funOpc(1);
funOpc(1, 2);
exports["default"] = {};
