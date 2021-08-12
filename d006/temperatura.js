var res = window.document.getElementById('saida')

function clicou(){
    var c = Number(window.prompt('Digite uma temperatura em °C (Celcius)'))
    res.innerHTML = `A temperatura de ${c.toFixed(1)}°C, corresponde a...`
    /*Calculo Kelvin*/
    var k = c + 273
    res.innerHTML += `<p>${k.toFixed(2)}°K (Kelvin)</p>`

    /*Calculo Fahrenheit*/
    var f = (1.8 * c) + 32
    res.innerHTML += `<p>${f.toFixed(2)}°F (Fahrenheit) </p>`
}