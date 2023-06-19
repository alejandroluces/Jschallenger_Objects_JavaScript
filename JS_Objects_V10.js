// Devolver propiedad de objeto anidado


// Write a function that takes an object as argument. In some cases 
// the object contains other objects with some deeply nested properties. 
// Return the property 'b' of object 'a' inside the original object if it exists. 
// If not, return undefined

// Escribe una función que tome un objeto como argumento. En algunos casos, 
// el objeto contiene otros objetos con algunas propiedades profundamente anidadas. 
// Devuelve la propiedad 'b' del objeto 'a' dentro del objeto original si existe. 
// Si no, devuelve indefinido
// mi solucion

const myFunction =(obj) =>{

    // return obj.a ? obj.a.b:undefined

    //Otra forma
    return obj?.a?.b

}

console.log(myFunction({a:1}));//undefined
console.log(myFunction({a:{b:{c:3}}}));//{c:3}
console.log(myFunction({b:{a:1}}));//undefined
console.log(myFunction({a:{b:2}}));//2




