# Plantilla de solucion - Modulos y divisibilidad (Peliculas de Miedo)

## Analisis del problema

El objetivo es evaluar la duracion o puntuacion total de una maraton de peliculas de miedo utilizando operadores de modulo y divisibilidad. Se determina si la duracion total es divisible de forma exacta entre un grupo de espectadores o turnos, ajustando la clasificacion segun la paridad del sobrante (residuo).

## Reglas aplicadas

1. **Validacion de datos vacios (Caso Borde):** Si la lista de duraciones/puntuaciones esta vacia, el divisor es menor o igual a cero, o los datos son invalidos, la funcion retorna un estado `"invalido"`.
2. **Calculo total y residuo:** Se calcula la suma total de minutos/puntos de las peliculas y se aplica el operador modulo (`total % grupo`).
3. **Determinacion de estado:**
   - Si `residuo === 0`: La reparticion es exacta (`divisible`).
   - Si `residuo % 2 === 0`: El sobrante es par (`sobrante_par`).
   - Si `residuo % 2 !== 0`: El sobrante es impar (`sobrante_impar`).

## Solucion implementada

```javascript
/**
 * (Peliculas de Miedo)
 */

function evaluarDivisibilidadMaraton(duraciones, grupo) {
    // 1. Validar casos borde
    if (!duraciones || duraciones.length === 0 || !grupo || grupo <= 0) {
        return {
            total: 0,
            residuo: 0,
            clasificacion: "invalido",
            explicacion: "Los datos de entrada no son validos o la lista esta vacia."
        };
    }

    // 2. Sumar total de minutos o puntuacion
    const total = duraciones.reduce((acc, curr) => acc + curr, 0);

    // 3. Aplicar operador de modulo
    const residuo = total % grupo;

    // 4. Clasificar segun divisibilidad y residuo
    let clasificacion = "";
    if (residuo === 0) {
        clasificacion = "divisible";
    } else if (residuo % 2 === 0) {
        clasificacion = "sobrante_par";
    } else {
        clasificacion = "sobrante_impar";
    }

    return {
        total: total,
        residuo: residuo,
        clasificacion: clasificacion,
        explicacion: `Total de ${total} minutos repartido entre ${grupo} personas genera un residuo de${residuo}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = evaluarDivisibilidadMaraton([90, 120, 105, 85], 4);
console.log(caso1);

console.log("\n=== Caso Borde (Lista Vacia) ===");
const caso2 = evaluarDivisibilidadMaraton([], 3);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `duraciones: [90, 120, 105, 85]`, `grupo: 4`
- **Resultado obtenido:**
  ```json
  {
    "total": 400,
    "residuo": 0,
    "clasificacion": "divisible",
    "explicacion": "Total de 400 minutos repartido entre 4 personas genera un residuo de 0."
  }
  ```

### Caso borde
- **Entrada:** `duraciones: []`, `grupo: 3`
- **Resultado obtenido:**
  ```json
  {
    "total": 0,
    "residuo": 0,
    "clasificacion": "invalido",
    "explicacion": "Los datos de entrada no son validos o la lista esta vacia."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-009/resoluciones/allison-vargas/`.
2. Ejecutar el codigo con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Para este reto use el operador de modulo (`%`) para comprobar la divisibilidad de la duracion total de las peliculas entre el tamano del grupo. Verifique primero que la lista no viniera vacia y luego clasifique la respuesta dependiendo de si el residuo era cero o si sobraban minutos pares/impares.