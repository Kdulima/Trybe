// PARTE 1 __________________________________________________________________


// 1 - Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a 
// ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'green';

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se 
// lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhodoFilho = elementoOndeVoceEsta.firstElementChild
primeiroFilhodoFilho.innerText = 'Bla Bla Bla Bla Bla Bla';

// 4 - Acesse o primeiroFilho a partir de pai.

const primeiroFilho = pai.firstElementChild;


// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho = elementoOndeVoceEsta.previousElementSibling;

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const text = elementoOndeVoceEsta.nextSibling;

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// 8 - Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho = pai.lastElementChild.nextElementSibling;


// PARTE 2 ______________________________________________________________

// 1 - Crie um irmão para elementoOndeVoceEsta.
const pai = document.getElementById('pai')
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

// 2 - Crie um filho para elementoOndeVoceEsta.
const primeiroFilho = document.getElementById('elementoOndeVoceEsta')
const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);


// 3 - Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
const filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);


// 4 - A partir desse filho criado, acesse terceiroFilho.

const terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.lastElementChild.nextElementSibling;
console.log(terceiroFilho);



// PARTE 3 ______________________________________________________________

//1 - Remova todos os elementos filhos de paiDoPai exceto pai, 
// elementoOndeVoceEsta e primeiroFilhoDoFilho.

const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();