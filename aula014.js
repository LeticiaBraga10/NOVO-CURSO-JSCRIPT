// FUNÇÕES ANÔNIMAS.


// const f = function(v1,v2){
//     return v1 + v2
// }

// console.log(f(4,5))

const f = function(...valores){
    let res = 0
    for(v of valores){
        res+=v
    }
    return res
}
console.log(f(11,2))


const j=new Function("v1","v2","v3","return v1+v2+v3") //Função construtor anônima
// return v1+v2+v3 é o corpo da função,ou seja, o que seráexecutado.

console.log(j(`${2,3,4} é o resultado da função construtor`))