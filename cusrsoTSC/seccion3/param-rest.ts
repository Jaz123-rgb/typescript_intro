/*Parametros indefinidos dentro de un string*/


const catapost = (dessert:string, ...fruits:string[] ):void => {
    console.log(`The dessert is ${dessert}, and has [ ${fruits} ]`);
}

catapost('Desss_1', 'orange', 'banana', 'strawberry', 'grapes') 