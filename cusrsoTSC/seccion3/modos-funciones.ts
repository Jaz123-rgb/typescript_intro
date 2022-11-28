function show():void{
    console.log('FUncion 1 ');
}

const show2 = (a:number, b:number):number =>{
    let sum: number = a + b;
    console.log(sum)
    return sum
} 
 
show()
show2(12,32)