// getElementById____________________________________________________________________

//1 - Recupere o elemento que contém o título da página e faça algo com ele, 
// como alterá-lo para o nome do seu filme favorito.

document.getElementById("page-title").innerText = "O Senhor dos Anéis";


//2 - Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

document.getElementById("second-paragraph").innerText = "The history of Middle Earth";


//3 - Por fim, recupere o subtítulo e altere-o também.

document.getElementById("subtitle").innerText = "Terceira Era"

// Bonus - Mude a cor do "paragraph".

document.getElementById("paragraph").innerText = "Uma história fascinante, desbravadora e empolgante.";
document.getElementById("paragraph").style.color = "green";



//getElementByClassName_____________________________________________________________________

//1 - Adicione uma classe igual para os dois parágrafos.

paragraph.className = "paragrafo"

//2 - Recupere os seus parágrafos via código JavaScript , usando a função 
// getElementsByClassName.

document.getElementsByClassName("paragrafo");

// 3 - Altere algum estilo do primeiro deles.

paragraph.style.background = "blue"

// 4 - Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.

let subtitle = document.getElementsByTagName("subtitle");
subtitle.style.color = "orange";