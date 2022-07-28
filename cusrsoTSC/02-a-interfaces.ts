interface ObjectInterface {
     label: string;
     name?: string;
     readonly secret: number;
}

function printLabel(obj: ObjectInterface){

    if (obj.name) console.log(obj.name)
    console.log(obj.label)

}

let testObj: ObjectInterface = {
    secret: 23,
    label:'prueba', 
    name: 'im here'
}

testObj.label = 'mangos';



printLabel(testObj)

export default {}