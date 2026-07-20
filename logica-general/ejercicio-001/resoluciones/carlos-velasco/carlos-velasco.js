const clasificarJugador = (jugador) =>{
    const totalPartidas = jugador.partidasGanadas + jugador.partidasPerdidas;
    
    if(totalPartidas === 0){
        return `${jugador.nombre} sin rango`
    }
    if(jugador.partidasGanadas >= 10 && jugador.partidasPerdidas < 2 ){
        return `${jugador.nombre} rango elite`
    }
    if(jugador.partidasGanadas>=5){
        return `${jugador.nombre} rango promedio`
    }
    return `${jugador.nombre}: Rango principiante`
}

console.log(clasificarJugador({ nombre: "PlayerOne", partidasGanadas: 12, partidasPerdidas: 1 })); 
console.log(clasificarJugador({ nombre: "Newbie", partidasGanadas: 0, partidasPerdidas: 0 }));    