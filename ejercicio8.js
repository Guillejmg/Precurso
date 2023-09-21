//Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.
//nota: tururu es una sentencia de invocaion y () es un operador como+ o ===
// let x  = 'Hola' ; let y = x; x = adios; Mirar grabacion 4:23, y es hola por que se refiere a el valor de X no a X
//en las expresiones booleanas todo es true salvo los 0 y. sus similares, undifines, null, false...buscar thruthy. y falsy
// las funciones solo retornan un solo valor (salgo con los generadores)

const cubeNumber = (a,b) => {
    return (Math.pow (a,b));
}

console.log (cubeNumber (2,3))
