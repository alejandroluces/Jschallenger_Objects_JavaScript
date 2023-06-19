// Creando objetos Javascript dos


// Write a function that takes two strings (a and b) as arguments. 
// Create an object that has a property with key 'a' and a value of 'b'. 
// Return the object.


// Escriba una función que tome dos cadenas (a y b) como argumentos. 
// Cree un objeto que tenga una propiedad con la clave 'a' y un valor de 'b'. 
// Devolver el objeto. 





function myFunction (a, b) {

    return {[a]:b}

}


console.log(myFunction('a','b'));//{a:'b'}
console.log(myFunction('z','x'));
console.log(myFunction('b','w'));


