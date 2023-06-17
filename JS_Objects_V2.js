// Write a function that takes an object with two properties as argument. 
// It should return the value of the property with key 'prop-2'. 
// Tipp: you might want to use the square brackets property accessor

// Add_exercise_jschallenger_objects_V2

// Escribe una función que tome un objeto con dos propiedades como argumento. 
// Debería devolver el valor de la propiedad con la clave 'prop-2'. 
// Sugerencia: es posible que desee utilizar el acceso de propiedad de corchetes


const myFunction =(obj) =>{

    return obj['prop-2']

}

console.log(myFunction({  one: 1,  'prop-2': 2}));
console.log(myFunction({  'prop-2': 'two',  prop: 'test'}));

