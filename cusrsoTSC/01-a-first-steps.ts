//! es es un obejot que tien dos propiedades el cual se espera un numero y un string
type SomethingComple = {
    foo: number,
    bar: string
}

function takeSomthingComplex(arg: SomethingComple) {
    console.log(arg.foo, arg.bar)
}

function getBar(): string {
    return 'some bar';
    
}

//* Aqui estamos mandando datos con la estrucutra del objeto SometrhingComplex
const fail = {
    foo: 123,
    bar: getBar()
}
//* Se estan evaluando si el obejto fail cumple con los requisitos previamente solicitados
takeSomthingComplex(fail);
//? existen tres ccategorias de errores succint, datile

let notSure: unknown = 4;
notSure = "maybe a string";
notSure = false;

export default {}

