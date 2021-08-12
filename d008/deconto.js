function clicou(){
    var res = window.document.getElementById('saida')
    var produto = window.prompt('Qual é o produto que você está comprando?')
    var preco = Number(window.prompt(`Qual é o preço do ${produto}`))
    var desconto = preco * 0.10
    var novo_preco = preco - desconto
    res.innerHTML = `<p><strong>Calculando desconto de 10% para ${produto}</strong></p>`
    res.innerHTML += `<p>O preço original era R$${preco.toFixed(2).replace('.', ',')}.</p> 
    \n<p>Você acaba de ganhar R$${desconto.toFixed(2).replace('.', ',')} de desconto (-10%).</p> 
    \n<p>No fim, você vai pagar R$${novo_preco.toFixed(2).replace('.', ',')} no produto ${produto},</p>`
}