function clicar(){
    var res = window.document.getElementById('saida')
    var preco_antigo = Number(window.prompt('Qual era o preço anterior do produto?'))
    var preco_novo = Number(window.prompt('Qual é o preço atual do produto?'))
    res.innerHTML = '<p>Analisando os valores informados...</p>'
    if(preco_novo > preco_antigo){
        var aumento = preco_novo - preco_antigo
        var porc = aumento / preco_antigo * 100
        res.innerHTML += `<p>O produto custava R$${preco_antigo.toFixed(2).replace('.',',')} e agora custa R$${preco_novo.toFixed(2).replace('.',',')}.</p>`
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        res.innerHTML += `<p>O preço subiu R$${aumento.toFixed(2).replace('.',',')} em relação ao anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${porc.toFixed(2).replace('.',',')}% pra cima</p>`
    }else if(preco_novo < preco_antigo){
        var aumento = preco_antigo - preco_novo
        var porc = aumento / preco_novo * 100
        res.innerHTML += `<p>O produto custava R$${preco_antigo.toFixed(2).replace('.',',')} e agora custa R$${preco_novo.toFixed(2).replace('.',',')}.</p>`
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu R$${aumento.toFixed(2).replace('.',',')} em relação ao anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${porc.toFixed(2).replace('.',',')}% pra baixo</p>`
    }else{
        res.innerHTML += `<p>Não houve variação no preço do produto</p>`
    }
}