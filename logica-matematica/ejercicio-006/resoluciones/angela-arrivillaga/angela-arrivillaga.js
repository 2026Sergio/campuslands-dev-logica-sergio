function calcularPuntajeHiperdeportivos(velocidadesMaximas, bonoAerodinamica, penalizacionPeso) {
    if (velocidadesMaximas.length === 0) {
        return 0;
    }

    let modelosProbados = velocidadesMaximas.length;
    let puntajeFinal = modelosProbados + bonoAerodinamica - penalizacionPeso;
    
    return puntajeFinal;
}

// prueba
let autosTesteo = [350, 400, 420, 380];
console.log("Resultado Hiperdeportivos:", calcularPuntajeHiperdeportivos(autosTesteo, 8, 3)); // esperado: 27

// prueba caso borde
let unAutoVeloz = [500];
console.log("Resultado Hiperdeportivos Caso Borde:", calcularPuntajeHiperdeportivos(unAutoVeloz, 1000, 500)); // Esperado: 501