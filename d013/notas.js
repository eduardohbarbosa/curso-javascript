function clicou(){
    var res = window.document.getElementById('saida')
    var nome = window.prompt('Qual é o nome do aluno?')
    var n1 = Number(window.prompt(`Primeira nota de ${nome}.`))
    var n2 = Number(window.prompt(`Segunda nota de ${nome}.`))
    var media = (n1 + n2) / 2
    res.innerHTML = '<p>Situação do Aluno:</p>'
    if(media < 3){
        res.innerHTML += '<p style = "background-color: red">REPROVADO</p>'
    }else if(media < 6){
        res.innerHTML += '<p style = "background-color: yellow">RECUPERAÇÃO</p>'
    }else{
        res.innerHTML += '<p style = "background-color: green">APROVADO</p>'
    }
}