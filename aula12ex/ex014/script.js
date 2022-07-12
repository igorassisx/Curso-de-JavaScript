function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`


    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'imagens/foto-manha.jpg'
        document.body.style.background = '#E1C996'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#F0A451'
    } else {
        //boa noite
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#395770'
    }
}

