const todosCursos=[...document.getElementsByClassName('curso')]
const Cursoc1=[...document.getElementsByClassName('c1')]
const Cursoc2=[...document.getElementsByClassName('c2')]


console.log(todosCursos)
console.log(Cursoc1)
console.log(Cursoc2)

Cursoc1.map((el)=>{
    el.classList.add('destaque')
})

Cursoc2.map((el)=>{
    el.classList.add('destaque2')
})