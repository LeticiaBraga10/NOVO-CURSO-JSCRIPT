const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos =['HTML','CSS','JAVASCRIPT','PYTHON','PHP','MYSQL']
const btnCursoSelecionado= document.getElementById('btnCursoSelecionado')
const btnRemoverCurso=document.getElementById('btnRemoverCurso')
const btnAddNovoCursoAntes=document.getElementById('btnAddNovoCursoAntes')
const btnAddNovoCursoDepois=document.getElementById('btnAddNovoCursoDepois')
const nomeCurso=document.getElementById('inomeCurso')
// const btnAddNovoCurso = document.getElementById('btnAddNovoCurso')

let indice=0  

const tirarselecao=()=>{ //serve para que apenas um seja selecionado
    const cursosSelecionados=[...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el)=>{
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id',`c ${indice}`)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = curso
    novoElemento.addEventListener('click',(evt)=>{
        tirarselecao() //para validar que apenas um seja selecionado.
        evt.target.classList.toggle('selecionado')
    })

    // const comandos=document.createElement('div')
    // comandos.setAttribute('class','comandos')

    // const rb = document.createElement('input')
    // rb.setAttribute('type','radio')
    // rb.setAttribute('name','comandos')

    // comandos.appendChild(rb)
    // novoElemento.appendChild(comandos)

    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado =()=>{
    const cursosSelecionados=[...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener('click',(evt)=>{

    alert('curso escolhido:'+ cursoSelecionado().innerHTML)
})

btnCursoSelecionado.addEventListener('click',(evt)=>{
    try{
        alert('curso escolhido:'+ cursoSelecionado().innerHTML)    
    }catch(ex){
        alert('Esolha um curso!')
    }     
})

btnRemoverCurso.addEventListener('click',(evt)=>{
    const cs= cursoSelecionado()
    if(cs!=undefined){
        cs.remove()   
    }else{
        alert('Selecione um curso!')
    }
    
    // alert('curso removido:'+ cursoSelecionado)
})

btnAddNovoCursoAntes.addEventListener('click',(evt)=>{
    
    try{
        if(nomeCurso.value!=''){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado())  
        }else{
            alert('Digite o nome do curso.')
        }
        
    }catch(ex){
        alert('Selecione um curso!')
    }
})

btnAddNovoCursoDepois.addEventListener('click',(evt)=>{
    try{
        if(nomeCurso.value!=''){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling) //Esse método é para inserir o próximo.   
        }else{
            alert('Digite o nome do curso.')
        }
        
    }catch(ex){
        alert('Selecione um curso!')
    }
})
// parentNode
// firstChild
// lastChild
// nextSibling
// previousSibling