// Função MAP = Serve para percorrer arrays ou coleções. Ele intera toda a coleção.

'use strict'

// const cursos=['HTML','CSS','JAVASCRIPT','PYTHON','PHP','REACT']
// cursos.map((el,i)=>{
//     // el=elementos , i = índice ou posição do elemento
//     console.log(`Curso: ${el} - posição: ${i}`)
// })

// let el=document.getElementsByTagName("div")
// el=[...el]
// el.map((e,i)=>{
//     // console.log(e)
//     e.innerHTML= 'Leca Nunes' //Serve para modificar o conteúdo do elemento
//     console.log(e.innerHTML) //O .innerHTML serve para mostrar o que tem dentro de cada div/ elemento
// })


// opção 3 para usar map:

// const el=document.getElementsByTagName("div")
// const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(val)


// opção 4 para usar map:

const convertInt=(el) => parseInt(el)
const dobrarInt=(el) => el*2
const dividirInt=(el) => el/2
let num = ['10','2','3','4','5'].map(dividirInt)
let num1 = ['10','2','3','4','5'].map(dobrarInt)
let num2 = ['10','2','3','4','5'].map(convertInt)
console.log(num1)
console.log(num)
console.log(num2)