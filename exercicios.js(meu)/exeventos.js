// const caixa1 = document.querySelector('#caixa1')
// const caixa2 = document.querySelector('#caixa2')
// const btn = document.querySelector('#btn_enviar')
// const todosCursos =[...document.querySelectorAll('.curso')]

// todosCursos.map((el)=>{
//     el.addEventListener('click',(evt)=>{
//         const curso = evt.target
//         curso.classList.toggle('destaque')
        
//     })
// })
// btn.addEventListener('click',(evt)=>{
//     const cursosSelecionados =[...document.querySelectorAll('.destaque')]
//     const cursosNSelecionados=[...document.querySelectorAll('.curso:not(.destaque)')]
//     cursosSelecionados.map((el)=>{
//         caixa2.appendChild(el)
//     })
//     cursosNSelecionados.map((el)=>{
//         caixa1.appendChild(el)
//     })
// })


const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_enviar')
const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso = evt.target
        curso.classList.toggle('destaque')
    })
})

btn.addEventListener('click',(evt)=>{
    const cursosSelecionados = [...document.querySelectorAll('.destaque')]
    const cursosNSelecionados = [...document.querySelectorAll('.curso:not(.destaque)')]
    cursosNSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
})