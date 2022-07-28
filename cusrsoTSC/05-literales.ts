//? Si le asiganomos a un tipo aspectos especificos del tipo solo se le puede asignar esos es este caso son los colores, solo lsoq tres que uaasigne 

type Color = "red" | "green" | "blue"

const Color: Color = 'green';

//* ejemplo con booleanos

interface ValidateSucces{
    isValidate: false,
    reason: null
}
interface ValidateUnsucces{
   isValidate: true, 
   reason: string
}

type ResultValidate = ValidateSucces | ValidateUnsucces 

const result: ResultValidate = {
    isValidate: true,
    reason: "as"
}


console.log(result.isValidate, result.reason);

export default {}

