// Comprobar si la propiedad existe en el objeto

// Write a function that takes an object (a) and a string (b) as argument. 
// Return true if the object has a property with key 'b'. Return false otherwise. 
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.

// Escribe una función que tome un objeto (a) y una cadena (b) como argumento. 
// Retorna verdadero si el objeto tiene una propiedad con la clave 'b'. Devuelve false en caso contrario. 
// Consejo: el caso de prueba 3 es un poco complicado porque el valor de la propiedad 'z' no está definido. Pero la propiedad en sí existe.


const myFunction=(a, b) =>{

    // return Object.hasOwn(a,b)

    // otra manera de hacerlo

    return b in a

}

console.log(myFunction({a:1,b:2,c:3},'b'));
console.log(myFunction({x:'a',y:'b',z:'c'},'a'));
console.log(myFunction({x:'a',y:'b',z:undefined},'z'));




