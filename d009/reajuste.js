function clicou(){
    var res = window.document.getElementById('saida')
    /*Solicitação dos dados*/
    var nome = window.prompt('Qual é o nome do funcionário?')
    var sal = Number(window.prompt(`Qual é o salário de ${nome}?`))
    var por = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))

    /*Contas */
    var aum = (sal * (por / 100))
    var novo_sal = sal + aum

    /*Saidas com os valores*/
    res.innerHTML = `<p>${nome} recebeu um aumento salarial!</p>`
    res.innerHTML += `<p>O salário atual era de R$${sal.toFixed(2).replace('.',',')}.</p>`
    res.innerHTML += `<p>Com o aumento de ${por}%, o salário vai aumentar R$${aum.toFixed(2).replace('.', ',')} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$${novo_sal.toFixed(2).replace('.',',')} </p>`
}