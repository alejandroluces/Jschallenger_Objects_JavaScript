// Eliminar una propiedad de un objeto


// Write a function that takes an object as argument. 
// It should return an object with all original object properties. 
// Except for the property with key 'b'

// Escribe una función que tome un objeto como argumento. 
// Debería devolver un objeto con todas las propiedades del objeto original. 
// Excepto la propiedad con clave 'b'
// la solucion es usar el metodo delete


const myFunction =(obj) =>{

    return delete obj.b,obj


// Otra forma de resolver
/* 
    const { b, ...rest } = obj;
        return rest;
*/

}
console.log(myFunction({ a: 1, b: 7, c: 3 }));
console.log(myFunction({ b: 0, a: 7, d: 8 }));
console.log(myFunction({ e: 6, f: 4, b: 5, a: 3 }));


