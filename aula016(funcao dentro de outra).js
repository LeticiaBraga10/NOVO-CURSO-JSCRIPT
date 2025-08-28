// Função dentro da outra:


const soma = (...valores) => {
    const somar = val => {
        let res =0
        for (v of val){
            res+=v
        }
        return res   
    }
    return somar(valores)
}

console.log(soma(1,33,4))

// const somar = val =>{
//     let res=0
//     for(v of val)
//         res +=v
//     return res
// }
// const soma=(...valores) => {
//     return somar(valores)
// }

// valor =[1,2,3,4,5,6,7]
// console.log(soma(...valor))