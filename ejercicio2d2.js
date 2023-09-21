//Escribe una función que reciba una palabra y revise si es un palíndromo.

const checkWord = (word) => {
    
    const newWord = word.tolowercase();
    const newWord2 = word.split('').reverse().join('');

    if (newWord !== newWord2){
        return ('Esto no es un palindromo');
    }
    return ('esto es un palindromo');
}

checkWord(word = 'palabra')

