


let someData = "116098765223"

if (isNaN(someData)) console.log("No es un numero de telefono")
else console.log("Es un numero de telefono")


const completeKeyValue = (field,data)=>{

    const query = {}
    const username= field
    query[username] = data


    return query
}




const ressult = completeKeyValue("nombre","Juan")
console.log(ressult.nombre)