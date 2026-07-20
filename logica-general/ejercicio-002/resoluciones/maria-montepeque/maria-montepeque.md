# Ejercicio 002: Validador de Estadísticas de Fútbol Sala

## Análisis del Problema

El objetivo es desarrollar un componente que valide la consistencia de los datos estadísticos de un equipo antes de registrarlo en el ranking oficial del torneo.

* **Entrada:** Un objeto con las estadísticas del equipo:
    * `nombre`: String (no vacío).
    * `puntos`: Number (entero positivo).
    * `partidosJugados`: Number (entero positivo).
* **Proceso:** * Verificar tipos de datos y existencia de propiedades.
    * Validar que los valores numéricos no sean negativos.
    * Evaluar la consistencia matemática según el reglamento del torneo.
* **Salida:** Un objeto con la estructura: `{ valido: boolean, accion: string, motivo: string }`.

---

## Reglas de Negocio

1. **Obligatoriedad de Identidad:** Todo registro debe incluir un nombre de equipo válido (tipo texto y no vacío).
2. **No Negatividad:** Las variables `puntos` y `partidosJugados` deben ser iguales o mayores a cero.
3. **Consistencia Deportiva:** En este torneo se otorgan máximo 3 puntos por victoria. Por lo tanto, los puntos acumulados no pueden superar el triple de los partidos jugados (`puntos <= partidosJugados * 3`). De lo contrario, se considera un error de digitación.

---

## Casos de Prueba

### 1. Registro Válido (Caso Normal)
* **Entrada:**
    ```json
    {
      "nombre": "Inter Movistar FS",
      "puntos": 12,
      "partidosJugados": 5
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "valido": true,
      "accion": "guardar",
      "motivo": "Datos consistentes. Registro aprobado para el ranking."
    }
    ```

### 2. Error de Consistencia Deportiva (Incoherencia)
* **Entrada:**
    ```json
    {
      "nombre": "ElPozo Murcia",
      "puntos": 10,
      "partidosJugados": 2
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "valido": false,
      "accion": "rechazar",
      "motivo": "Inconsistencia: Los puntos superan el máximo posible para los partidos jugados."
    }
    ```

### 3. Error de Validación (Valores Negativos)
* **Entrada:**
    ```json
    {
      "nombre": "Barça Atlètic",
      "puntos": -3,
      "partidosJugados": 4
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "valido": false,
      "accion": "rechazar",
      "motivo": "Los indicadores estadísticos no pueden ser negativos."
    }
    ```

---

## Arquitectura de la Solución

El algoritmo actúa como un middleware de validación por capas (fases). Primero intercepta errores de tipo o campos ausentes, luego descarta valores aritméticamente imposibles (negativos) y finalmente aplica la regla de negocio del torneo. Al fallar cualquiera de las capas, el proceso aborta inmediatamente devolviendo el motivo del rechazo, optimizando el tiempo de ejecución.

---

## Ejecución

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu entorno.
2. Ubica la terminal en el directorio de este ejercicio.
3. Ejecuta el archivo de la solución:
    ```bash
    node maria-montepeque.js
    ```