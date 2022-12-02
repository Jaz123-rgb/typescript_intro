    class Padrre{
        nombre: string
        edad: number

        constructor(nombre_: string, edad_:number){
            this.nombre = nombre_
            this.edad = edad_
        }

        showName(){
            console.log(this.nombre)
        }
    }

    class son extends Padrre{
            apellidp:string
            
        constructor(nombre_:string, edad_:number, apellid_:string){
            super(nombre_, edad_)
            this.apellidp = apellid_       
        }
        showNmaeSon():void{
            console.log(this.nombre);
        }
    }

    const nuevojio: object = new son("Jaziel", 123, "PEREX")
     