function canal(){
    let n1= 10
    let n2 = 11
    let res = n1 * n2
    if(res % 2 == 0){
        return 'par'

    }else{ //Os dois returns não podem ser executados ao mesmo tempo.
        return 'impar'
    }
}
console.log(canal())
// let res=canal()
// console.log(res)