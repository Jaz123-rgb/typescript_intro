class Hello {
    
    message: string;
    constructor(message: string){
        this.message = message
    }

    saludos(){
        return "greetings" + this.message;
    }
}
let hola = new Hello(" Chanchito feliz");

console.log(hola.saludos());
