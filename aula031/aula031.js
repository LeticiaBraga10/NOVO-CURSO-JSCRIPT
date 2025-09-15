const p_array = document.querySelector('#array')
const txt_ipesquisar = document.querySelector('#caixa_verificar')
const btnReduzir = document.querySelector('#btnReduzir')
const resultado = document.querySelector('#resultado')

const elementos_array=[2,3,5,7,1,18]

let ant=[]
let atu=[]
let dobro=[]

p_array.innerHTML='['+elementos_array+']';

btnReduzir.addEventListener('click',(evt)=>{
    // dobro.push(elementos_array[0]*2) //Dobra o 1º elemento.Pois, o dobro.push não mostra o 1º elemento.
    resultado.innerHTML=elementos_array.reduce((anterior,atual,pos)=>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        return atual + anterior
        /* anterior = acumulador. reserva o valor da posição 0 p ele.
        Portanto, o atual é contabilizado à partir do valor da posição 1. */
    })
    resultado.innerHTML+='<br/>V.anterior:'+ant+'<br>V.atual:'+atu +'<br/> V.dobro:'+dobro
})

// obs: previousValue = valor anterior;
// currentValue = valor atual;
// currentIndex = posição atual;

// Reduce serve para reduzir o array para um único valor.