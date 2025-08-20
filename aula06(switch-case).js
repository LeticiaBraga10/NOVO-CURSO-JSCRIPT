let lugar = 7
// Estrurura de switch case
// É usada quando eu sei exatamente quais são os casos. E quando eu quero testar uma condição especial para uma avaliação.
switch(lugar){
    case 1:
        console.log('Primeiro lugar')
        break
    case 2:
        console.log('Segundo lugar')
        break
    case 3:
        console.log('Terceiro lugar')
        break
    case 4: case 5: case 6:
        console.log('Prêmio de participação.')
        break
    default:
        console.log('Não se classificou para a final.')
        break
}