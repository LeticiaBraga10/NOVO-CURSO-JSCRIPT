let n1 = 0
let n2 = 0
let media = (n1+n2)/2

if (media > 7 && media <= 10){
    console.log(` SUA NOTA FINAL É: ${media} \n SITUAÇÃO: APROVADO`)
}else if(media <= 7 && media >=5 ){
    console.log(` SUA NOTA FINAL É: ${media} \n SITUAÇÃO: RECUPERAÇÃO`)
}else if( media < 5 && media >=0){
    console.log(` SUA NOTA FINAL É: ${media} \n SITUAÇÃO: REPROVADO`)
}