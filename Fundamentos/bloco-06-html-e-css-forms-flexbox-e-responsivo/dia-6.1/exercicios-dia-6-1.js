function createStateOptions () {
    let estado = document.getElementById('estado');
    let estadoOpcoes= ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
    
    for (let index = 0; index < estadoOpcoes.length; index += 1) {
        let createOpcoes= document.createElement('option');
        createOpcoes.innerText= estadoOpcoes[index];
        estado.appendChild(createOpcoes);
    }
}
createStateOptions();
console.log('oi');   


let data = document.getElementById('dataInicio');

function dataInicio () {
    let dataInteira = data.value.split('/');
    let dia = dataInteira[0];
    let mes = dataInteira[1];
    let ano = dataInteira[2];

if (dia < 0 || dia > 31) {
    alert('Valor incorreto');
}

if (mes < 0 || mes > 12) {
    alert('Valor incorreto');
}

if (ano < 0) {
    alert('Valor incorreto');
}
}
data.addEventListener('keyup', dataInicio);



