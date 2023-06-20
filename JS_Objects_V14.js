// Multiplica todos los valores de los objetos por x

// Write a function that takes an object (a) and a number (b) as arguments. 
// Multiply all values of 'a' by 'b'. Return the resulting object.


// Escribe una función que tome un objeto (a) y un número (b) como argumentos. 
// Multiplica todos los valores de 'a' por 'b'. Devuelve el objeto resultante.
//la solucion es la siguiente:


const myFunction =(a,b) =>{
    let result = {};
    for (let key in a){
        result[key] = a[key] * b;
    }
    
    return result;
}


console.log(myFunction({a:1,b:2,c:3},3));
console.log(myFunction({j:9,i:2,x:3,z:4},10));
console.log(myFunction({w:15,x:22,y:13},6));

