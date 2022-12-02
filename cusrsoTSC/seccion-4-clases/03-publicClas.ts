class Animal{
    public nombre:string
    public size: number

    public constructor(ConNombre:string, ConSize:number){
        this.nombre = ConNombre
        this.size = ConSize
    }

    public move(): void{
            console.log('im moving');
    }
}

const obj = new Animal('Perro',2)
obj.nombre
