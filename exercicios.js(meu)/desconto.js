const valor = 900
let desconto = 0

if (valor > 100){
    desconto = 0.1 * valor
    
}else{
    desconto = 0.05 * valor 
}
console.log(`Ao pagar com R$ ${valor}, você ganha R$ ${desconto.toFixed(2)} de desconto.`)