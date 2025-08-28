// Manipulando DOM:

'use strict'

//1ª: getElementById: retorna apenas o elemento, então, c1,c2,c3 e c4 aparecem separadamente.

const dc1 = document.getElementById('c1')
const dc2 = document.getElementById('c2')
const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
// console.log(dc1)
// console.log(dc1.id)
// console.log(dc1.innerHTML)
// // dc1.innerHTML= 'Leca'
// console.log(dc2.innerHTML)
// console.log(dc3.innerHTML)

const arrayElementos=[dc1,dc2,dc3,dc4]

// for(let d of arrayElementos){
//     d.innerHTML ='jcihcnd'
// }

// console.log(arrayElementos)

arrayElementos.map((el,i,a)=>{
    el.innerHTML = 'olá,mundo'
    console.log(el, i, a)
})


//2ª getElementsByTagName: Retorna todos os elementos de mesma tag que, nesse caso, é a <div>.

//Para transformar uma coleção html em array: É importante para usar ferramentas mais variáveis como,porexemplo o map.
//forma 01(simplificada):
// const colecaoHTML = [...document.getElementsByTagName('div')] 
// console.log(colecaoHTML)

//forma 02:
let colecaoHTML = document.getElementsByTagName('div')
colecaoHTML=[...colecaoHTML]
console.log(colecaoHTML)