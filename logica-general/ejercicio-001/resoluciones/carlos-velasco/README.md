# Logica general 001 - clasificacion por reglas

## Sistema de Clasificación de Jugadores

Este script implementa un motor de lógica condicional para asignar rangos a jugadores basados en su historial de partidas ganadas y perdidas. Es una herramienta diseñada para evaluar el desempeño competitivo de manera automatizada.

* **Descripción del proceso:**
* **Validación inicial:** Verifica si el jugador no ha disputado partidas para asignar el estado "sin rango".
* **Categorización jerárquica:** Evalúa el rendimiento mediante umbrales específicos:
* **Elite:** Requiere al menos 10 victorias y menos de 2 derrotas.
* **Promedio:** Requiere al menos 5 victorias.
* **Principiante:** Se asigna por defecto si no se cumplen las condiciones superiores.




* **Tecnologías:**
* JavaScript (lógica de control).


---

### Explicación técnica: ¿Cómo funciona la lógica?

La lógica aplicada utiliza una estructura de **retorno temprano** (*early return*), lo cual es una excelente práctica de programación:

1. **Priorización de condiciones**: Al validar primero la ausencia de partidas (`totalPartidas === 0`), el script descarta inmediatamente a los jugadores nuevos, evitando evaluaciones innecesarias de sus victorias o derrotas.
2. **Evaluación de rangos**: Los bloques `if` están ordenados por criticidad. Al evaluar primero el rango "Elite", nos aseguramos de que los jugadores con desempeño sobresaliente reciban la clasificación más alta antes de considerar si simplemente califican como "Promedio".
3. **Valor por defecto**: El último `return` actúa como una red de seguridad. Si el jugador no encaja en ninguna categoría superior, se le asigna automáticamente el rango básico, asegurando que la función siempre devuelva un resultado coherente.


### Lógica del Código

```javascript
const clasificarJugador = (jugador) =>{
    const totalPartidas = jugador.partidasGanadas + jugador.partidasPerdidas;
    
    // Verifica si el jugador es nuevo (sin actividad)
    if(totalPartidas === 0){
        return `${jugador.nombre} sin rango`
    }
    // Rango Elite: Alta efectividad
    if(jugador.partidasGanadas >= 10 && jugador.partidasPerdidas < 2 ){
        return `${jugador.nombre} rango elite`
    }
    // Rango Promedio
    if(jugador.partidasGanadas >= 5){
        return `${jugador.nombre} rango promedio`
    }
    // Rango Principiante por defecto
    return `${jugador.nombre}: Rango principiante`
}

```

### Salida Esperada

De acuerdo con la ejecución registrada en el archivo los resultados en consola son:

```text
PlayerOne rango elite
Newbie sin rango

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-001/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco

