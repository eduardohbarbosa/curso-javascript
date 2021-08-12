function clicou(){
    var res = window.document.getElementById('saida')
    var a = Number(window.prompt('Qual é o valor de a?'))
    var b = Number(window.prompt('Qual é o valor de b?'))
    var c = Number(window.prompt('Qual é o valor de c?'))
    var delt = b ** 2 - (4 * a * c) 
    res.innerHTML += `<p>A equação atual é ${a}x<sup>2</sup> + ${b}x + ${c} = 0 </p>`
    res.innerHTML += `<p>O cálculo realizado será &Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c} </p>`
    res.innerHTML += `<p>O valor calculado foi &Delta; = ${delt} </p>`
}