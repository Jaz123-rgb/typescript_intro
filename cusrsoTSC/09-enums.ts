//? Crear un set de diferentes documentos basados numeros basado en stream 

enum Direction {
    Up = 2,
    Down = 23,
    rigth = 34,
    left= 23 
    //* si no se le asigan un valor especfico lo toma como numero aparari del cero 
} 

enum Strings{
    uno = "UNO",
    dos = "DOS", 
    tres = "VALS"   
}

interface Ball{
  size: number
  ppsicion: Direction.Up
}

interface Name{
    size: string
    namepo: Strings.tres
}
console.log(Strings.tres); 