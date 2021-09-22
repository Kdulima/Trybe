// 1 - Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros 
// menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

function receiveNumber (fatorial) {
    let counter = 1;
    for (let index = 2; index < fatorial; index += 1) {
        counter *= index;
    }
return counter;
}
console.log(receiveNumber(4));


// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

// function higherWord (frase) {
// let string= frase.split(" ")
// let counterWord = 0;
// let valueWord = "";

//     for (let index = 0; index < string.length; index += 1) {
//         let counter = string[index].length;

//         if (counter > counterWord) {
//             counterWord = counter;
//             valueWord = string[index];
//         }
//     }
//     return valueWord;
// }
// console.log(higherWord("Foguete não tem ré!"));