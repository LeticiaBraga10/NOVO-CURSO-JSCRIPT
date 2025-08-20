// const jog1 = {nome:'Leca', energia: 0, felicidade: -1}
// const jog2 = {nome:'caca', energia: 10, anime: 90}
// const jog3 = {...jog2,...jog1}
// console.log(jog3)


// const soma=(v1,v2,v3) =>{
//     return v1 + v2 + v3
// }

// let valores=[1,4,8]

// console.log(soma(...valores))

// (...) SPREAD OPERATOR

const objs1 = document.getElementsByTagName('div')
const objs2 = [...document.getElementsByTagName('div')]
objs2.forEach(Element =>{
    Element.innerHTML='Curso de JavaScript'
    
})

console.log(objs1)
console.log(objs2)