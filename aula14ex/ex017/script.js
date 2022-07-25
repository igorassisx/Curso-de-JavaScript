function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        alert('Por favor digite um numero!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = '' // aqui vai limpar antes de colocar outro valor
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // aqui é mais para php
            tab.appendChild(item)
            c++
        }
    }
}