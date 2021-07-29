let custo = 100;
let venda = -100;
let imposto = (custo * 0,2);
let custoTotal = custo + imposto;
let lucroProduto = (venda*1000) - (custoTotal*1000);
    
if (custo < 0 || venda < 0 || imposto < 0) {
    console.log("erro");
}
else {
    console.log(lucroProduto);
}
    
