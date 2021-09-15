// function userInfo() {
//   var userEmail = 'maria@email.com';

//   // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  
// }
// console.log(userEmail);
// userInfo();


if (true) {
    // inicio do escopo do if
    var userAge = "20";
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20

//   Experimente usar o let e o const.



// Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// )

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')


// Arrow Functions

const printName = () => {
    const myName = "Lucas";
    return myName;
  }
  console.log(printName());

  const printName = () => "Lucas";
console.log(printName());

Mas lembre-se que podemos omitir os parênteses apenas em um cenário:
Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:

const printName = () => "Lucas";
console.log(printName());