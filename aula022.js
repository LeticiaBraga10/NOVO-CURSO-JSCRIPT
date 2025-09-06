// Manipulando DOM

//3º querySelector: retorna o primeiro elemento que ele encontrar.
//querySelectorAll: retorna todos os elementos.

const divTodos =[...document.getElementsByTagName('div')]
const todosCursos=[...document.getElementsByClassName('curso')]
const Cursoc1=[...document.getElementsByClassName('c1')]
const Cursoc2=document.getElementsByClassName('c2')
const especial=document.getElementById("c1")

// const query_divTd=[...document.querySelectorAll('div[class]')]
const query_divTd=[...document.querySelectorAll('div > p')]
const primeiraDiv = document.querySelectorAll('div')
const query_cursosTd = [...document.querySelectorAll(".curso")]
const query_cursoc1=[...document.querySelectorAll('.c1,p')] // elementos c1 e elementos p.
const query_especial = document.querySelectorAll('#c1') //[0]

console.log(query_cursoc1)
// console.log(query_especial)
console.log(query_divTd)
// console.log(query_cursosTd)

// console.log('divTodos')
// console.log(todosCursos)
// console.log(Cursoc1)
// console.log(Cursoc2)

// Cursoc1.map((el)=>{
//     el.classList.add('destaque')
// })

// Cursoc2.map((el)=>{
//     el.classList.add('destaque2')
// })