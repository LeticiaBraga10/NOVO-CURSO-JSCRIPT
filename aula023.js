//EVENTOS:

//op01: function msg(){
//     alert('clicouuu')
// }

const c1=document.querySelector('#c1')
const msg=()=>{
    alert ('BOM DIAaA!')
}


c1.addEventListener("click",msg)
op02: c1.addEventListener("click",()=>{ //Para usar essa, apague o const msg()
    alert ('Boa tarde!')

})




// c1.addEventListener("click",()=>{
//     msg()

// })




// c1.addEventListener("click",(evt)=>{
//     const el=evt.target
//     el.classList.add("destaque")
// }) // Serve para modificar o estilo da box ao clicar.



//Para modificar todos os elementos:

const cursosc1=[...document.querySelectorAll('.c1')]
const cursosc2=[...document.querySelectorAll('.c2')]
cursosc1.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el=evt.target
        el.classList.add('destaque')
        console.log(el+'foi clicado!')
    })
})

cursosc2.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el=evt.target
        el.classList.add('destaque2')
        console.log(el.innerHTML + "foi clicado!")
    })
})