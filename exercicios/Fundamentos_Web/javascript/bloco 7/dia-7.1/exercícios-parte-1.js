// 1.1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável 
// foi declarada.

function testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

// 1.2 - Modifique a estrutura da função para que ela seja uma arrow function.

// Sem necessidade, a função ficaria sem sentido.

// 1.3 - Modifique as concatenações para template literals.

const scope = function testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const ifScolpe = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
  }

  testingScope(true);





//   2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2
    oddsAndEvens[1] = 3
    oddsAndEvens[2] = 4
    oddsAndEvens[3] = 7
    oddsAndEvens[4] = 10
    oddsAndEvens[5] = 13

    return oddsAndEvens
}

    const sortedArray = sortOddsAndEvens()

console.log(`Os numeros ${sortedArray} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉


// Bonus

const   oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(oddsAndEvens);
