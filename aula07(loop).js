// repetições do loop = iteração
// for(inicialização da variavel; condição; contador)
// for (let i=1; i<=10; i++){
//     if(i % 2 == 0){
//         console.log(`${i} é par`)
//     }else{
//         console.log(`${i} é ímpar`)
//     }
// }
// console.log('fim')

// for of = para pegar os elementos
// for in = para pegar as posições

// let num =[10,20,30,40,50]

// for (n in num){
//     console.log(num[n]) //a primeira letra da variável declarada é o padrão que vai funcionar
// }
// for (n of num){
//     console.log(n)
// }

// for (let i=0; i<num.length;i++){
//     console.log(num[i])
// }


const objs = document.getElementsByTagName('div')

let num = [1,2,3,4,5,6,7,8,9]

for(o of objs){
    console.log(o.innerHTML= "CURSO DE JAVASCRIPT")
}
for(o in objs){
    console.log(objs[o].innerHTML)
}
