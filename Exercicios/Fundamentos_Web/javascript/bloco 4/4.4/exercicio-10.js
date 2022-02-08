function somaDeTodos(numeros) {
    let sum = 0;
    for (let index = 1; index <= numeros; index += 1) {
        sum = sum + index;
    }
    return sum;
}
console.log(somaDeTodos(5));