//funciones con nombre o nombaradda 

function fun1(x: number, y: number): number  {
    return x + y ;    
} 

// FUncion anonima
let fun2 = function (x: number, y: number) {
    return x + y;
    
}

// arrow function
let fun3 = (x: number, y: number): number => {
    return x + y;
}
console.log(fun1(2,3));
console.log(fun2(2,3));
console.log(fun3(2,3));

export default {}