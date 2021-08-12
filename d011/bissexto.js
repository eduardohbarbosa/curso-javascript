function clicar(){
    var res = window.document.getElementById('saida')
    var ano = window.prompt('Qual é o ano que você quer verificar?')
    if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        res.innerHTML += `<p>O ano de ${ano} <strong style = "background-color: green">É BISSEXTO!</strong></p>`
    }else{
        res.innerHTML += `<p>Não! O ano de ${ano} <strong style = "background-color: red">NÃO BISSEXTO!</strong>`
    }
}