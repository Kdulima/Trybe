// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
//   street: 'Rua Frei Gaspar'
// };

// // const { name } = product;
// // console.log(name); // Smart TV Crystal UHD

// const { name, seller, price, street } = product;
// console.log(name, seller, price, street); 
// ______________________________________________________________________________________________________________

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const { a: name, b: classAssigned, c: subject} = student;

// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática
// ______________________________________________________________________________________________________________

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

const animalDescription = (animal) => {
  const { name, commonName, weightRange } = animal;

  return`Lion (Pantera Leo)`};