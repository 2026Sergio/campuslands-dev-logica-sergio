# Logica general 081 - sistema de clasificación por reglas competitivas

## Motor de Evaluación de Rangos basado en Estadísticas de Jugador

Este script analiza las estadísticas de rendimiento de un jugador en un entorno competitivo (específicamente su proporción KDA y porcentaje de victorias o *winrate*), aplicando un conjunto de reglas condicionales anidadas para determinar y asignar su rango correspondiente.

* **Descripción del proceso:**
* **Validación de Integridad**: Comprueba si el objeto de estadísticas es nulo o si las propiedades clave (`kda` y `winrate`) no existen o no corresponden al tipo de dato numérico esperado, retornando un error en caso de anomalías.
* **Inicialización de Rango**: Establece por defecto un valor base ("Bronce") en caso de que el perfil no cumpla con los umbrales superiores.
* **Evaluación por Reglas Condicionales**: Compara métricas de manera descendente para clasificar al perfil:
* **Gran Maestro**: KDA $\ge$ 3.5 y Winrate $\ge$ 65%.
* **Diamante**: KDA $\ge$ 2.5 y Winrate $\ge$ 55%.
* **Oro**: KDA $\ge$ 1.5 y Winrate $\ge$ 50%.
* **Plata / Bronce**: Cualquier valor por debajo de los umbrales anteriores.


* **Retorno del Reporte**: Devuelve un objeto estructurado que incluye el KDA evaluado, el winrate formateado con el símbolo de porcentaje, el rango asignado y una explicación del proceso.


* **Tecnologías:**
* JavaScript (verificación estricta de tipos de datos con `typeof`, estructuras de control condicionales anidadas, manipulación de objetos).



---

### Explicación técnica

1. **Jerarquía de Reglas Condicionales**: El orden de evaluación de las condiciones es estrictamente descendente (de mayor exigencia a menor exigencia). Esto garantiza que un perfil con estadísticas excepcionales sea interceptado por la regla más alta sin caer en clasificaciones inferiores erróneas.
2. **Defensividad en los Datos**: La validación inicial previene fallas de ejecución o resultados indeseados ante objetos incompletos o propiedades con tipados incorrectos.

### Lógica del Código

```javascript
const clasificarJugadorCompetitivo = (estadisticas) => {
    // 1. Validar que existan los datos y sean numéricos
    if (!estadisticas || typeof estadisticas.kda !== 'number' || typeof estadisticas.winrate !== 'number') {
        return { error: "Datos de entrada incompletos o inválidos para la clasificación." };
    }

    let rango = "Bronce";

    // 2. Aplicar reglas de clasificación competitiva de mayor a menor exigencia
    if (estadisticas.kda >= 3.5 && estadisticas.winrate >= 65) {
        rango = "Gran Maestro";
    } else if (estadisticas.kda >= 2.5 && estadisticas.winrate >= 55) {
        rango = "Diamante";
    } else if (estadisticas.kda >= 1.5 && estadisticas.winrate >= 50) {
        rango = "Oro";
    } else {
        rango = "Plata / Bronce";
    }

    // 3. Retornar el reporte consolidado
    return {
        kda: estadisticas.kda,
        winrate: `${estadisticas.winrate}%`,
        rango_asignado: rango,
        explicacion: "Se aplicaron reglas condicionales basadas en el KDA y el porcentaje de victorias para determinar el rango competitivo."
    };
};

```

### Salida Esperada

```json
{
  "kda": 4.2,
  "winrate": "70%",
  "rango_asignado": "Gran Maestro",
  "explicacion": "Se aplicaron reglas condicionales basadas en el KDA y el porcentaje de victorias para determinar el rango competitivo."
}
{
  "kda": 1,
  "winrate": "45%",
  "rango_asignado": "Plata / Bronce",
  "explicacion": "Se aplicaron reglas condicionales basadas en el KDA y el porcentaje de victorias para determinar el rango competitivo."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-081/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco