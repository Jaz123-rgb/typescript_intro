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
var Padrre = /** @class */ (function () {
    function Padrre(nombre_, edad_) {
        this.nombre = nombre_;
        this.edad = edad_;
    }
    Padrre.prototype.showName = function () {
        console.log(this.nombre);
    };
    return Padrre;
}());
var son = /** @class */ (function (_super) {
    __extends(son, _super);
    function son(nombre_, edad_, apellid_) {
        var _this = _super.call(this, nombre_, edad_) || this;
        _this.apellidp = apellid_;
        return _this;
    }
    son.prototype.showNmaeSon = function () {
        console.log(this.nombre);
    };
    return son;
}(Padrre));
var nuevojio = new son("Jaziel", 123, "PEREX");
