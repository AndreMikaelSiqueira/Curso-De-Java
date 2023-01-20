function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora Sao ${hora} Horas`
    if (hora >= 0 && hora < 13) {
        img.src = 'imagens/Manha.png'
        document.body.style.background = '#ea7d5c'
        horario.innerHTML = `☀️Bom Dia☀️`
    } else if (hora <= 17) {
        img.src = 'imagens/Tarde.png'
        document.body.style.background = '#a19891'
        horario.innerHTML = `☕Boa Tarde☕`
    } else if (hora >= 18) {
        img.src = 'imagens/Noite.png'
        document.body.style.background = '#021758'
        horario.innerHTML = `🌙Boa Noite🌙`
    }
} 