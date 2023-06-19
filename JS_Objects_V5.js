// Compruebe si la propiedad existe en el objeto y es veraz

// Write a function that takes an object (a) and a string (b) as argument. 
// Return true if the object has a property with key 'b', but only if it has a truthy value. 
// In other words, it should not be null or undefined or false. Return false otherwise.


// Escribe una función que tome un objeto (a) y una cadena (b) como argumento. 
// Devuelve verdadero si el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. 
// En otras palabras, no debe ser nulo, indefinido o falso. Devuelve false en caso contrario.

const myFunction =(a,b) =>{

    return  a[b] != undefined

}

console.log(myFunction({a:1,b:2,c:3},'b'));
console.log(myFunction({x:'a',y:null,z:'c'},'y'));
console.log(myFunction({x:'a',b:'b',z:undefined},'z'));


// otr forma de reesolverlo

const mFunction =(c,d) =>{

    return  Boolean(c[d]);

}

console.log(mFunction({a:1,b:2,c:3},'b'));
console.log(mFunction({x:'a',y:null,z:'c'},'y'));
console.log(mFunction({x:'a',b:'b',z:undefined},'z'));


const cFunction =(f,g) =>{

    return  f [g] ? true : false

}

console.log(cFunction({a:1,b:2,c:3},'b'));
console.log(cFunction({x:'a',y:null,z:'c'},'y'));
console.log(cFunction({x:'a',b:'b',z:undefined},'z'));

