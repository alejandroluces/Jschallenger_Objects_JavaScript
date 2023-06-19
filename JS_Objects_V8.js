// Creación de objetos Javascript tres


// Write a function that takes two arrays (a and b) as arguments. 
// Create an object that has properties with keys 'a' and corresponding values 'b'. 
// Return the object.

// Escriba una función que tome dos matrices (a y b) como argumentos. 
// Cree un objeto que tenga propiedades con las claves 'a' y los valores correspondientes 'b'. 
// Devolver el objeto.


function myFunction (a, b) {

    
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
    //Otra forma de hacerlo. 
    // return Object.fromEntries(a.map((_, i) => [a[i], b[i]]));
 
    


}
console.log(myFunction(['a','b','c'],[1,2,3]));
console.log(myFunction(['w','x','y','z'],[10,9,5,2]));
console.log(myFunction([1,'b'],['a',2]));

