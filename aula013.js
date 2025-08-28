//Parâmetro REST é quando eu posso criar uma função sem um número determinado de valores.

// function soma(...valores){
//     let tam = valores.length
//     let res = 0
//     for(let i=0; i<tam; i++){
//         res +=valores[i]
//     }
//     return res
// }

// console.log(soma(12,3,5,6,7))

//USANDO FOR OF:

function soma(...valores){
    let res = 0
    for(let v of valores){
        res +=v
    }
    return res
}

console.log(soma(12,3,5,6,7))


// SERVE PARA CONTAR A QUANTIDADE DE VALORES DIGITADOS SEM FAZER A SOMA.
// function operacao(...valor){
//     return valor.length
// }
// console.log(operacao(1,2,3,4))



