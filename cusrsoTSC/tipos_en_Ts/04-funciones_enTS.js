function circle(diam) {
    return "the circumference is " + Math.PI * diam;
}
console.log(circle(10));
//ahora con arrow functiona
var circaorrw = function (diam) {
    return "the cirunference whith arrow func " + Math.PI * diam;
};
console.log(circaorrw(10));
// the big diference, si yo decalro la funcino con mi aroow fucntions significa que puedo evita escrbir funiton explicitamente
// tambien se pude agregar un signo de pregunta para hacer la variable es opcional 
var add = function (a, b, c) {
    console.log(c);
    return a + b;
};
console.log(add(12, 10, 'resultado'));
var logMessage = function (msg) {
    console.log("You are a " + msg);
};
logMessage("back-end developer");
// variable signature
var SayHola;
// fucnio  cumpliendo condiciones de la variable signature
SayHola = function (ituno) {
    console.log("Hola" + ituno);
};
SayHola(' motherfucker');
