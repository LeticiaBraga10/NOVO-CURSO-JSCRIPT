const p_array = document.querySelector('#array')
const txt_ipesquisar = document.querySelector('#caixa_verificar')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elementos_array=[2,3,5,7,0,18]
// const elementos_array=[32,33,55,67,70,81]
p_array.innerHTML='['+elementos_array+']';

btnVerificar.addEventListener('click',(evt)=>{
    const ret=elementos_array.some((e,i)=>{
        if(e<18){
            resultado.innerHTML='o erro está em:'+i++
        }
        return e>=18 // É a especificação que será avaliada pelo every ou some (método).
    })
    if(ret){
        resultado.innerHTML='ok'
    }
})

//O '.every' só vai retornar true se todos os elementos forem verdadeiros, caso contrário, ele retornará false. Sendo assim, seguindo um viés lógico, ele equivale ao &&(E).?

//O some vai retornar true se, pelo menos um for verdadeiro. Esse metódo equivale ao ||(OU).