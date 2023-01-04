function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anos')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        alert('Otario coloca as coisas ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { {}
            genero = 'Homem'
            if (idade >= 0 && idade <=5) {
                img.setAttribute('src', 'imagens/demoniobebe.png')
            } else if (idade <= 13) {
                img.setAttribute('src', 'imagens/criançadocaralho.png')
            } else if (idade <= 17) {
                img.setAttribute('src', 'imagens/desgraça.png')
            } else if (idade <= 30) {
                img.setAttribute('src', 'imagens/adultopika.png')   
            } else if (idade <= 50) {
                img.setAttribute('src', 'imagens/velhofoda.png')
            }
                
            } if (fsex[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade <=5) {
                    img.setAttribute('src', 'imagens/bebemuie.png')
                } else if (idade <= 13) {
                    img.setAttribute('src', 'imagens/criançamuie.png')
                } else if (idade <= 17) {
                    img.setAttribute('src', 'imagens/adolecrente.png')
                } else if (idade <= 30) {
                    img.setAttribute('src', 'imagens/carolarrombadamulher.png')   
                } else if (idade <= 96) {
                    img.setAttribute('src', 'imagens/velhakkkkk.png')
                } else if (idade <= 97) {
                    img.setAttribute('src', 'imagens/rainhaelizabeth.png')
                }
            }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
            
}