// alert("Oi")

var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaAguaVivaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel == 'normal'){
    criaAguaVivaTempo = 1500
}else if(nivel == 'dificil'){
    criaAguaVivaTempo = 1000
}else if(nivel == 'impossivel'){
    criaAguaVivaTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function () {
    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaagua_viva)
        window.location.href = 'vitoria.html'
    }
    else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

    //remover agua_viva anterior (caso exista)

    if (document.getElementById('agua_viva')) {
        document.getElementById('agua_viva').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById("v" + vidas).src = 'assets/imagens/coracao_vazio.png'
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 200
    var posicaoY = Math.floor(Math.random() * altura) - 200

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //Criando o elemento html
    var agua_viva = document.createElement('img')
    agua_viva.src = 'assets/imagens/aguaviva.png'
    agua_viva.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    agua_viva.style.left = posicaoX + "px"
    agua_viva.style.top = posicaoY + "px"
    agua_viva.style.position = 'absolute'
    agua_viva.id = 'agua_viva'
    agua_viva.onclick = function () {
        this.remove()
    }


    document.body.appendChild(agua_viva)

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'agua_viva1'

        case 1:
            return 'agua_viva2'

        case 2:
            return 'agua_viva3'
    }
}


function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}




