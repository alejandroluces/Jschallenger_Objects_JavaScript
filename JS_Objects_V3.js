// Acceso a las propiedades del objeto tres


// Write a function that takes an object with two properties and a string as arguments. 
// It should return the value of the property with key equal to the value of the string


// Escribe una función que tome un objeto con dos propiedades y una cadena como argumentos. 
// Debería devolver el valor de la propiedad con clave igual al valor de la cadena


const myFunction=(obj, key) =>{

    return obj[key]

}



console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'));
console.log(myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country'));




