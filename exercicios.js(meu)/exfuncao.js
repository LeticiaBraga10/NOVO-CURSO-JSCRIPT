// function saudacao(nome){
//     return `Olá,${nome}. Seja bem - vindo(a)!`
// }

// console.log(saudacao('Leticia'))

// const s = new Function("nome","return `Olá,Leca`")
// console.log(s('Leca'))

// function soma(...valores){
//     let res = 0
//     for(let v of valores){
//         res += v
        
//     }
//     return  res
// }
// console.log(soma(1,2,3))


// const s = new Function("nome","return `Olá,Leca`")
// console.log(s())



// const mult = (el) => el*2
// let numero1 = ['1','22','223','234'].map(mult)
// console.log(numero1)

function* perguntas(){
    const nome = yield 'Qual é o seu nome?'
    return `${nome}`
}

const itp = perguntas()
console.log(itp.next().value)