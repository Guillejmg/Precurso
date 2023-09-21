//Crea una función que imprima por consola un número al azar entre 0 y 10.

const randomNumber = () => {
    const numberX =  Math.trunc (Math.random ())
    if (numberX > 10 || numberX < 0) {
        return numberX
    };
return numberX

}

console.log ('te ha tocado el:')
console.log (randomNumber ())