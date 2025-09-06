// STOP PROPAGATION

// const caixa1 = document.querySelector('#caixa1')
// const btn_c1 = document.querySelector('#c1')

// caixa1.addEventListener('click',(evt)=>{
//     console.log(evt.target)
//     console.log('clicouu')
// })

// btn_c1.addEventListener('click',(evt)=>{
//     evt.stopPropagation()
//     console.log('cloicouu')
// })


const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]

// console.log(caixa1.children[caixa1.children.length-1]) // para apontar o último elemento da coleção

// console.log(caixa1.children[3]) para apontar um elemento entre os disponíveis

// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children) //para pegar todos os elementos.

// console.log(btn_c[0].getRootNode())
// console.lo g(btn_c[0].ownerDocument)

console.log(btn_c[0].children.length > 0 ? 'tem filhos' : 'Não tem filhos')
console.log(caixa1.children.length > 0 ? 'tem filhos' : 'Não tem filhos')

// console.log(caixa1.firstElementChild.innerHTML='Olá,mundo!') //para fazer modificações no 1º elemento.

console.log(caixa1.children[3].innerHTML='Olá,mundo!')
//para fazer modificações em qualquer elemento, basta indicar a posição.