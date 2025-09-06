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

const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id',`c ${indice}`)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = curso

    const comandos=document.createElement('div')
    comandos.setAttribute('class','comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','comandos')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const radioSelecionado =()=>{
    const todosRadios=[...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado=todosRadios.filter((el,ind,arr)=>{
        return el.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener('click',(evt)=>{
    const rs=radioSelecionado()
    const cursoSelecionado=rs.parentNode.previousSibling.textContent
    alert('curso escolhido:'+ cursoSelecionado)
})
btnCursoSelecionado.addEventListener('click',(evt)=>{
    const rs=radioSelecionado()
    if(rs!=undefined){
        const cursoSelecionado=rs.parentNode.previousSibling.textContent
        alert('curso escolhido:'+ cursoSelecionado)  
    }else{
        alert('Esolha um curso!')  
    }
    
})
btnRemoverCurso.addEventListener('click',(evt)=>{
    const rs=radioSelecionado()
    if(rs!=undefined){
        const cursoSelecionado=rs.parentNode.parentNode
        cursoSelecionado.remove()   
    }else{
        alert('Selecione um curso!')
    }
    
    // alert('curso removido:'+ cursoSelecionado)
})

btnAddNovoCursoAntes.addEventListener('click',(evt)=>{
    const rs=radioSelecionado()
    try{
        if(nomeCurso.value!=''){
            const cursoSelecionado=rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado)  
        }else{
            alert('Digite o nome do curso.')
        }
        
    }catch(ex){
        alert('Selecione um curso!')
    }
})

btnAddNovoCursoDepois.addEventListener('click',(evt)=>{
    const rs=radioSelecionado()
    try{
        if(nomeCurso.value!=''){
            const cursoSelecionado=rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling) //Esse método é para inserir o próximo.   
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