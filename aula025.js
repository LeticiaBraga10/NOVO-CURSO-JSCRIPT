// const caixa1 = document.querySelector('#caixa1')
// const btn_c = [...document.querySelectorAll('.curso')]
// const c1_2 = document.querySelector('#c1_2')
// const cursos =['HTML','CSS','JAVASCRIPT','PHP','REACT','MYSQL','PYTHON','ReactNative']

// cursos.map((el,chave)=>{
    
//     const novoElemento = document.createElement("div")
//     novoElemento.setAttribute("id",`c ${chave+1}`) // esse + 1 foi colocado para que a contagem fosse iniciada à partir do nº 1.
//     novoElemento.setAttribute("class","curso c1") //O elemento ReactNative foi criado exclusivamente pelo JS.
//     novoElemento.innerHTML=el
//     caixa1.appendChild(novoElemento)
// })

// RemoveElement:
 
const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML','PHP','JAVASCRIPT','PYTHON','JAVA']

cursos.map((el,chave)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c'+ chave)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=el


    const btn_lixeira = document.createElement('img')
    btn_lixeira.setAttribute('src','./lixeira.png')
    btn_lixeira.setAttribute('class','btn_lixeira')
    btn_lixeira.addEventListener('click',(evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })
    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento)
})