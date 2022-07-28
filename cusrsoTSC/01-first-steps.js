function takeSomthingComplex(arg) {
    console.log(arg.foo, arg.bar);
}
function getBar() {
    return 'some bar';
}
//* Aqui estamos mandando datos con la estrucutra del objeto SometrhingComplex
var fail = {
    foo: 123,
    bar: getBar()
};
//* Se estan evaluando si el obejto fail cumple con los requisitos previamente solicitados
takeSomthingComplex(fail);
