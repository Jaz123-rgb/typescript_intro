/*Son os paramettros que por implemetacion dentro de nuestro poyectos
podemos o no tener
// ?S queremos agragr un dato opcionales sin que nos cause problemas solo agrega ? el eltipo
//? de datoa llamar 
 s
*/
const opcionales = (name:string, last_name:string, edad?:number)=>{
    if (edad) {
        console.log(`se llama ${name} su apellido es ${last_name} y su edad ${edad}`)
    }else{
        console.log(`se llama ${name} su apellido es ${last_name} y no dijo edad`)
    }
  }
opcionales('Liss', "Perez", 123)
opcionales('breda', "Perez")
