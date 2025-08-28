// FUNÇÕES GERADORAS: o primeiro retorno de uma função geradora é chamado de interator

// function* cores(){
//     yield 'Azul'
//     yield 'Amarelo'
//     yield 'Verde'
//     yield 'Roxo'
// }

// const itc=cores()
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)

// function* perguntas(){
//     const nome=yield 'Qual é o seu nome?'
//     const esporte=yield 'Qual é o seu esporte favorito?'
//     return `Olá, ${nome}, o seu esporte favorito é ${esporte}`
// }

// const itp = perguntas()
// console.log(itp.next().value)
// console.log(itp.next('Leticia').value)
// console.log(itp.next('surf').value)


// function* contador(){
//     let i = 0
//     while(true){
//         yield ++i
//     }
// }
// const itc=contador()
// for(let i=0; i<10; i++){
//     console.log(itc.next().value)
// }


function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i>5)
            break
    }
}
const itc=contador()
for(let c of  itc){
    console.log(c)
}
// itc=iterator color; itp=iterator perguntas, it+, etc...