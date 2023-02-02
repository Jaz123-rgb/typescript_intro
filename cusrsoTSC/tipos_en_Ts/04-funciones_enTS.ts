
function circle(diam: number): string{
return `the circumference is ` + Math.PI * diam;
}


console.log(circle(10));

//ahora con arrow functiona
const circaorrw = (diam: number):string => {
    return `the cirunference whith arrow func `+ Math.PI *diam;
}
console.log(circaorrw(10));
// the big diference, si yo decalro la funcino con mi aroow fucntions significa que puedo evita escrbir funiton explicitamente

// tambien se pude agregar un signo de pregunta para hacer la variable es opcional 
const add = (a: number, b: number ,c?:number | string) =>{
    console.log(c);
    return a + b;
}
console.log(add(12, 10, 'resultado'));

const logMessage = (msg: string): void => {
    console.log(`You are a ` + msg);
}

logMessage(`back-end developer`);

// variable signature
let SayHola: (ituno: string) => void;

// fucnio  cumpliendo condiciones de la variable signature
 SayHola = (ituno) => { 
    console.log(`Hola` + ituno);
 }
 SayHola(' programer');








    
