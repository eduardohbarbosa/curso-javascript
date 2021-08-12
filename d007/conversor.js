var cotacao = Number(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))
var res = window.document.getElementById('saida')

function clicou(){
    var reais = Number(window.prompt('Quantos R$ você quer converter?'))
    var dolar = reais / cotacao
    res.innerHTML += `<p> Com o valor de R$${reais.toFixed(2).replace('.', ',')} você poderá comprar US$${dolar.toFixed(2).replace('.', ',')}</p>`
}