//? I give the principla characreres into a new class, called public, and i can put this class in every clas that i wont

class Animal{
    public name: string;
    public size: number; //* in this part of the code, indicated, this is private, so i can show this property in he console
   constructor(name: string, size: number){
    this.size = size;
    this.name = name; 
   }
   public isBIg(){
    if(this.size > 10){
        return true;
    }else{
        return false;
    }
 }
}

 

 class  Snake extends Animal {
    constructor(name: string, size: number) {
        super(name, size);
        
    }
 }
 let snake = new Snake(" a su madre ", 200);
 console.log(snake.isBIg(), snake.name);