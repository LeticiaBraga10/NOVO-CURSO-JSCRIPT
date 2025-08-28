// THIS dentro de funções:

function aluno(nome,nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimo=function(){ 
        setTimeout(function(){ // ❌ Aqui, 'this' NÃO é o objeto 'al1'
        // ❌ 'this' é o objeto global (window) ou undefined (em strict mode)
            console.log(this.nome)
            console.log(this.nota)
        },1000)
    }

    this.dados_arrow = function(){
        setTimeout(()=>{ //Nesse caso, o arrow function não utiliza o contexto do setTimeout, ele usa o contexto do 'pai', a função aluno.(Arrow functions NÃO têm próprio 'this'
        // ✅ Herdam 'this' do escopo pai (o objeto 'al1')
            console.log(this.nome)
            console.log(this.nota) 
        },1000) //Esse 1000 = 1 segundo
    }
}
const al1=new aluno('Leticia',9)
al1.dados_anonimo()
al1.dados_arrow()
