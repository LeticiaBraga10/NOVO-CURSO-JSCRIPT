// Parâmetros

// function soma(p1){
//     console.log(p1)
// }

// soma('leca')
// soma('oi')
// soma(2020)
// soma(2021)
// soma(2022)

// function soma(n1=12,n2=11){
//     console.log(n1+n2)
// }
// soma()


// function soma(n1,n2){
//     console.log(n1+n2)
// }
// soma(3/*n1*/,1/*n2*/) //a ordem dos valores dentro da chamada será a mesma da realizada dentro do parametro.

// function soma(n1=0,n2=0){
//     return n1 + n2
// }

// console.log(soma(1,23))    

//ou:


// function add(v){
//     return valor + v
// }


// let valor = 0
// console.log(valor)

// valor = add(23)
// console.log(valor)

// valor = add(2)
// console.log(valor)


function add(v){
    valor += v //apaguei o return e adicionei o +=, com isso, pude apagar o valor de deixar só add()
    // ^ originalmente a variável está fora da função, mas note que é possivél fazer modificações nela mesmo assim.

}


let valor = 0
console.log(valor)

add(23)
console.log(valor)

add(2)
console.log(valor)


// const VALOR_PADRAO=0

// function soma(n1 = VALOR_PADRAO, n2 = VALOR_PADRAO){
//     let res
//     res = n1 + n2
//     return res
// }

// let soma_resultado = soma(5,5)
// console.log(soma_resultado)