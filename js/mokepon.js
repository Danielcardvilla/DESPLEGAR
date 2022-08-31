let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
   
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra) 
    

    let botonreiniciar = document.getElementById('boton-reiniciar')
    botonreiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputHipodoge = document.getElementById('hipodogue')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')



    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodogue'
    }else if (inputCapipepo.checked) {
      spanMascotaJugador.innerHTML = 'Capipepo'
    }else if (inputRatigueya.checked) {
      spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('selecciona una mascota para poder jugar')   
    } 

    seleccionarMascotaEnemigo()
} 

    function seleccionarMascotaEnemigo() {
        let mascotaAleatoria = aleatorio(1,3) // al i9ncorporar el resto de mascotas toca cambiar el 3 por el numero total de mascotas.
        let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
       
        if (mascotaAleatoria == 1 ) {
            spanMascotaEnemigo.innerHTML = 'Hipodogue'
        } else if (mascotaAleatoria == 2) {
            spanMascotaEnemigo.innerHTML = 'Capipepo'
        } else {
            spanMascotaEnemigo.ineerhtml = 'Ratigueya'
         } 
         
         /// se puede borrar si no gfenera cambio alguno

         /* else if (ataqueAleatoria == 3 )
        {
            spanMascotaEnemigo.innerHTML = 'Ratigueya'
         } */
    }


    function ataqueFuego() {
        ataqueJugador='FUEGO'
        ataqueAleatorioEnemigo()
    }
    function ataqueAgua() {
        ataqueJugador='AGUA'
        ataqueAleatorioEnemigo()
    }

    function ataqueTierra() {
        ataqueJugador='TIERRA'
        ataqueAleatorioEnemigo()
    }

    function ataqueAleatorioEnemigo() {
       let ataqueAleatorio = aleatorio(1,3) 
        
       if (ataqueAleatorio == 1)
       { ataqueEnemigo = 'FUEGO'

    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'

    }  else {
        ataqueEnemigo = 'TIERRA ' //esto se puede borrar si sigue sin funcionar
    }

    /* else if (ataqueAleatorio == 3) {
        ataqueEnemigo = 'TIERRA. ' 
    } */

    combate()
}

    function combate() {

        let spanVidasJugador = document.getElementById('vidas-jugador')
        let spanVidasEnemigo = document.getElementById('vidas-enemigo')
        


        if (ataqueEnemigo == ataqueJugador) {  
            crearMensaje("EMPATE")
        } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if(ataqueJugador == 'Agua'  && ataqueEnemigo == 'FUEGO') {
            crearMensaje("Ganaste")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
            crearMensaje("Ganaste")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } 
        else {
                crearMensaje("PERDISTE")
                vidasJugador--
                spanVidasJugador.innerHTML = vidasJugador
        }

        revisarVidas()
    }

        function revisarVidas(){
            if (vidasEnemigo == 0) {
                crearMensajeFinal("FELICITACIONES GANASTE :)")
            } else if (vidasJugador == 0) {
                crearMensajeFinal("lO SIENTO, PERDISTE :C ")
            } 
        }

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let AtaqueDelJugador = document.getElementById('ataques-del-jugador')
    let AtaqueDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p') 
    let nuevoAtaqueDelEnemigo = document.createElement('p') 

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    AtaqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    AtaqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')


    sectionMensajes.innerHTML = resultadoFinal


      let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block '


}

function reiniciarJuego() {
    location.reload()


}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)

