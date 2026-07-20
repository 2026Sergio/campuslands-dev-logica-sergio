//Reto 009: Simulación de Estados - Películas de Miedo

function simularEstadosPeliculaMiedo(simulacionEspectador) {
    // 1. Caso Borde Estructural
    if (!simulacionEspectador || !simulacionEspectador.estadoInicial || !Array.isArray(simulacionEspectador.eventosPelicula)) {
        return { estadoFinal: "error de simulacion", ritmoCardiacoFinal: 0, resultado: "abortado", bitacora: "Los parámetros de telemetría del espectador o los eventos no son válidos." };
    }

    const { estadoInicial: { ritmoCardiaco = 70, ansiedad = 'bajo' }, eventosPelicula } = simulacionEspectador;
    if (eventosPelicula.length === 0) {
        return { estadoFinal: "calmado", ritmoCardiacoFinal: ritmoCardiaco, resultado: "pelicula sin sobresaltos", bitacora: "No se procesaron estímulos en la pantalla. El espectador mantuvo su estado base." };
    }

    const NIVELES_ANSIEDAD = ['bajo', 'medio', 'alto'];
    const TRANSICIONES = {
        jumpscare:    { bpm: 35,  ansiedad: 2 },  
        persecucion:  { bpm: 15,  ansiedad: 1 }, 
        silencio:     { bpm: -10, ansiedad: -1 }  
    };

    let bpm = ritmoCardiaco;
    let indiceAnsiedad = Math.max(0, NIVELES_ANSIEDAD.indexOf(ansiedad));

    // 2. Ejecución de la Máquina de Estados 
    for (let i = 0; i < eventosPelicula.length; i++) {
        const evento = String(eventosPelicula[i]).toLowerCase().trim();
        const regla = TRANSICIONES[evento];

        if (!regla) continue; 

        bpm = regla.bpm > 0 ? (bpm + regla.bpm) : Math.max(60, bpm + regla.bpm);
        indiceAnsiedad = Math.min(2, Math.max(0, regla.ansiedad === 2 ? 2 : (indiceAnsiedad + regla.ansiedad)));

        // Cláusula de Emergencia Inmediata 
        if (bpm >= 140) {
            return {
                estadoFinal: "en shock", ritmoCardiacoFinal: bpm, resultado: "interrumpir pelicula",
                bitacora: `Simulación detenida prematuramente en el evento #${i + 1} (${evento}). El espectador alcanzó un nivel crítico de taquicardia.`
            };
        }
    }

    // 3. Resolución Semántica del Estado Final
    const nivelAnsiedadFinal = NIVELES_ANSIEDAD[indiceAnsiedad];
    const esCritico = bpm > 100 || nivelAnsiedadFinal === 'alto';
    const esInmune = bpm <= 85 && nivelAnsiedadFinal === 'bajo';

    return {
        estadoFinal: esCritico ? "terrorizado" : esInmune ? "relajado" : "asustado",
        ritmoCardiacoFinal: bpm,
        resultado: esCritico ? "espectador requiere luces encendidas" : esInmune ? "espectador es inmune al miedo" : "espectador estable",
        bitacora: `Flujo de estados completado con éxito tras evaluar ${eventosPelicula.length} escenas de terror.`
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 009 ---");

const pruebas = [
    {
        tipo: "Caso Normal - Espectador Terrorizado",
        datos: { estadoInicial: { ritmoCardiaco: 75, ansiedad: "bajo" }, eventosPelicula: ["persecucion", "silencio", "jumpscare"] }
    },
    {
        tipo: "Caso de Negocio - Estado de Shock",
        datos: { estadoInicial: { ritmoCardiaco: 90, ansiedad: "medio" }, eventosPelicula: ["jumpscare", "persecucion", "jumpscare", "silencio"] }
    },
    {
        tipo: "Caso Borde - Eventos Vacíos",
        datos: { estadoInicial: { ritmoCardiaco: 70, ansiedad: "bajo" }, eventosPelicula: [] }
    }
];

pruebas.forEach(({ tipo, datos }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(simularEstadosPeliculaMiedo(datos), null, 2));
});