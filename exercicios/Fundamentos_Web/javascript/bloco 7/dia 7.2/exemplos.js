// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

//   customer1.lastName = 'Faria';
//   console.log(customer1);

//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };

//   console.log(customer2);customer2['lastname'] = 'Silva';
//   console.log(customer2);



//   const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
//   customer[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
//   customer[newKey] = fullName;
//   console.log(customer);

function xablau(objeto, chave, valor) {
    return objeto[chave] = valor;
  }
  
  const key = 'newbla';
  const value = "teste";
  const objeto = {
    teste: 'teste'
  };
  
  console.log(xablau(objeto, key, value));