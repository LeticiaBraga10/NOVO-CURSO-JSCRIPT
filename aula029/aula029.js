const p_array = document.querySelector('#array')
const txt_ipesquisar = document.querySelector('#txt_ipesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

const elementos_array=[12,3,5,7,0,11]
p_array.innerHTML='['+elementos_array+']';


btnPesquisar.addEventListener('click',(evt)=>{
    const valorPesquisado = Number(txt_ipesquisar.value)

    if(isNaN(valorPesquisado)){
        resultado.innerHTML='Por favor, digite um número válido!'
        return
    }
    const ret = elementos_array.find((e,i)=>{
        if(e === valorPesquisado){
            resultado.innerHTML=`O valor ${e} encontra-se na posição ${i}`
            return true;
        }
    });
    if (ret === undefined){
        resultado.innerHTML = `O valor ${valorPesquisado} é incompatível com o array.`
    } 
})

txt_ipesquisar.addEventListener('click',(e)=>{
    if(e==='pesquisar'){
        btnPesquisar.click();
    }
})