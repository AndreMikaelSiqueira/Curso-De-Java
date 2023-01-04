function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/mANHA.png'
        msg.innerHTML = `Agora sao ${hora} da manha`
        document.body.style.background = '#d48257'
    }  else if (hora >= 12 && hora < 18) {  
        img.src = 'imagens/Tarde.png'
        msg.innerHTML = `Agora sao ${hora} da tarde `
        document.body.style.background = '#928577'
    } else {
        img.src = 'imagens/Noite.png'
        msg.innerHTML = `Agora sao ${hora} da noite`
        document.body.style.background = '#031d64'
    } 
       
}