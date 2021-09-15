let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
    otherInfo: {
    otherPersonagem: 'Tio Patinhas',
    otherOrigem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    otherNota: 'O último MacPatinhas',
    otherRecorrente: 'Sim',
    }
  };

  for (let key in info, otherInfo) {
    console.log(info[key], otherinfo[key]);
}