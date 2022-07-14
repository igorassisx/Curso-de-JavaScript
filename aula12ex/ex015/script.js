function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute ('src', 'imagens/bebe-h.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute ('src', 'imagens/jovem-h.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-h.jpg')
            } else {
                //idoso
                img.setAttribute('src','imagens/idoso=h.jpg')
            }
       } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebe-m.jpg')
            } else if (idade < 24) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos: ${genero} com idade de ${idade} anos`
       res.appendChild(img) 
    }
}
