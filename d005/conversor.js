var res = window.document.getElementById('saida')

function clicou(){
    var m = Number((window.prompt('Digite uma distância em metros (m)')))
    res.innerHTML = `A distância de ${m} metros, corresponde a...`

    /*Resposta KM*/
    var km = m / 1000
    res.innerHTML += `<p>${km.toFixed(3).replace('.', ',')} Quilômetros (Km)</p>`

    /*Resposta HM*/
    var hm = m / 100
    res.innerHTML += `<p>${hm.toFixed(3).replace('.', ',')} Hectômetros (Hm)</p>`

    /*Resposta DAM*/
    var dam = m / 10
    res.innerHTML += `<p> ${dam.toFixed(3).replace('.', ',')} Decâmetros (Dam)</p>`

    /*Resposta dm*/
    var dm = m * 10
    res.innerHTML += `<p>${dm.toFixed(1).replace('.', ',')} decímetros (dm)</p>`

    /*Resposta cm*/
    var cm = m * 100
    res.innerHTML += `<p>${cm.toFixed(1).replace('.', ',')} centímetros (cm)</p>`

    /*Resposta mm*/
    var mm = m * 1000
    res.innerHTML += `<p>${mm.toFixed(1).replace('.', ',')} melímetros (mm)</p>`
}