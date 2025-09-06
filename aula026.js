// const filtroMaior18 = (valor, indice, arr)
// const filtroMaior18 = (valor)=>{
//     if (valor >=18){
//         return valor
//     }
// }

// const idades =[12,13,14,15,16,17,18,19,20]
// const maior =idades.filter(filtroMaior18)



// console.log(idades)
// console.log(maior)

//Usando a função dentro do filter:


const idades =[12,13,14,15,16,17,18,19,20]
const maior =idades.filter((valor,indice,array)=>{
    if (valor >=18){
        return valor
    }
})
const menor =idades.filter((valor,indice,array)=>{
    if(valor < 18){
        return valor
    }
})

console.log(`Todas as idades: ${idades}`)
console.log(`Todos os maiores de idade: ${maior}`)
console.log(`Todos os menores de idade: ${menor}`)