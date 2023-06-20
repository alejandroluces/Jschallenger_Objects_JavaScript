// Combinar dos objetos con claves coincidentes

// Write a function that takes two objects as arguments. Unfortunately, 
// the property 'b' in the second object has the wrong key. It should be named 'd' instead. 
// Merge both objects and correct the wrong property name. Return the resulting object. 
// It should have the properties 'a', 'b', 'c', 'd', and 'e'


// Escribe una función que tome dos objetos como argumentos. Desafortunadamente, 
// la propiedad 'b' en el segundo objeto tiene la clave incorrecta. Debería llamarse 'd' en su lugar. 
// Combine ambos objetos y corrija el nombre de propiedad incorrecto. Devuelve el objeto resultante. 
// Debe tener las propiedades 'a', 'b', 'c', 'd' y 'e'


const myFunction =(x,y) =>{
    y.d=y.b; delete y.b
    return  {...x,...y}
}


console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

