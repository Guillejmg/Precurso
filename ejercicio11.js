// 11- Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.
// A seguir se trata de una fuction impura (Por tener un resultado 'Random')
const randomNumber1To10 = () => {
    const numb = Math.trunc(Math.random() * 10 + 1)
    // console.log(numb)
    return numb
}

const app = () => {
    
    // Guardado en 'saveRandom' y comprobo si funciona con console.log(saveRandom)
    let saveRandom = randomNumber1To10()
    
    // Pregunta al usuario 
    const userInput = prompt("Por favor, ingrese un número del 1 al 10:").trim()
    if(userInput === '' || userInput === null || isNaN(userInput)) {
        console.log('Esto no es un número')
        return
    } 

    if(userInput < 1 || userInput > 10){
        console.log('Este número está fuera del rango')
        return
    }
        
    if(userInput !== saveRandom){
        console.log(`Incorrecto, el número ${userInput} no coincide con ${saveRandom}`)
        return
    }

    console.log('Perfect my friends')
}

app()