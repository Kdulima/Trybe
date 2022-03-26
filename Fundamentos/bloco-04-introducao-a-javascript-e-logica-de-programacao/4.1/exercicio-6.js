let xadrex = "cavalo"

switch (xadrex) {
    case "PEÃO".toLowerCase():
        console.log("avança uma casa para frente");
        break;

    case "BISPO".toLowerCase():
        console.log("avança várias casas na diagonal");
        break;

    case "CAVALO".toLowerCase():
        console.log("avança sempre em L");
        break;

    case "TORRE".toLowerCase():
        console.log("avança várias casas na horizontal ou vertical");
        break;
    
    case "REI".toLowerCase():
        console.log("avança uma casa em qualquer direção");
        break;

    case "RAINHA".toLowerCase():
        console.log("avança várias casas em qualquer direção");
        break;

    default:
        console.log("Peça não econtrada");
        break;
}