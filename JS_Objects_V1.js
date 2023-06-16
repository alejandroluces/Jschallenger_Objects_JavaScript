
// Accediendo a las propiedades del objeto uno


// Write a function that takes an object with two properties as argument. 
// It should return the value of the property with key country.

// Escribe una función que tome un objeto con dos propiedades como argumento. 
// Se debe devolver el valor del inmueble con clave país.


const myFunction =(obj) =>{

    return obj.country;

}

console.log(myFunction({ continent: 'Asia', country: 'Japan' }));
console.log(myFunction({ country: 'Sweden', continent: 'Europe' }));

