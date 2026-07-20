# Ejercicio 008: Gateway de Validación y Control de Acceso a Streaming

## Análisis del Problema

El objetivo es implementar un pipeline de validación secuencial que determine si un usuario puede reproducir una película en una plataforma de streaming, evaluando aspectos técnicos, geográficos, de control parental y de modelo de negocio.

* **Entrada:** Un objeto contenedor `flujoReproduccion` estructurado de la siguiente forma:
    * `usuario`: Objeto que contiene:
        * `edad`: Number (Años del espectador, $\ge 0$).
        * `tipoPlan`: String (`"Gratuito"`, `"Estándar"`, `"Premium"`).
        * `pais`: String (Código ISO de dos letras, ej. `"CO"`).
    * `pelicula`: Objeto que contiene:
        * `titulo`: String (Nombre de la obra).
        * `edadMinima`: Number (Restricción de edad para visualización).
        * `paisesBloqueados`: Array de Strings (Códigos ISO de países con restricciones de licencia).
        * `disponibleStreaming`: Boolean (Estado del archivo en el servidor).
* **Proceso:** El algoritmo actúa como un pipeline secuencial de compuertas lógicas. El flujo evalúa estrictamente el siguiente orden cronológico y detiene la ejecución inmediatamente al fallar cualquiera de los niveles (Short-Circuit):
    1. Disponibilidad técnica del servidor.
    2. Restricciones de licenciamiento geográfico.
    3. Control de madurez y restricción de edad.
    4. Privilegios comerciales del tipo de plan.
* **Salida:** Un objeto con la estructura: `{ accion: string, pasoDetencion: string | null, motivo: string }`.

---

## Reglas de Negocio

1. **Filtro Técnico (Paso 1):** Si `disponibleStreaming` es `false`, el flujo se interrumpe de inmediato. No se procesan cuentas ni ubicaciones si el recurso no está en línea.
2. **Soberanía Geográfica (Paso 2):** Si el `pais` del usuario se encuentra dentro del array de `paisesBloqueados`, se cancela el acceso por restricciones de distribución internacional.
3. **Control Parental (Paso 3):** Si la `edad` del usuario es estrictamente menor a la `edadMinima` de la película, se bloquea la reproducción para proteger al menor.
4. **Validación Comercial (Paso 4):** Los usuarios con `tipoPlan: "Gratuito"` tienen restringido el acceso a este catálogo, requiriendo una suscripción de pago (`"Estándar"` o `"Premium"`).

---

## Casos de Prueba

### 1. Acceso Autorizado (Caso Normal / Happy Path)
* **Entrada:**
    ```json
    {
      "flujoReproduccion": {
        "usuario": { "edad": 20, "tipoPlan": "Premium", "pais": "CO" },
        "pelicula": {
          "titulo": "Interstellar 2",
          "edadMinima": 13,
          "paisesBloqueados": ["JP", "KP"],
          "disponibleStreaming": true
        }
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "reproducir",
      "pasoDetencion": null,
      "motivo": "El usuario cumple con todos los requisitos técnicos, geográficos, de edad y comerciales."
    }
    ```

### 2. Bloqueo por Control Parental (Caso de Control)
* **Entrada:**
    ```json
    {
      "flujoReproduccion": {
        "usuario": { "edad": 10, "tipoPlan": "Premium", "pais": "CO" },
        "pelicula": {
          "titulo": "Interstellar 2",
          "edadMinima": 13,
          "paisesBloqueados": ["JP", "KP"],
          "disponibleStreaming": true
        }
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "bloquear",
      "pasoDetencion": "Paso 3: Control Parental",
      "motivo": "El usuario no cuenta con la edad mínima requerida (13 años) para visualizar esta película."
    }
    ```

### 3. Interrupción Temprana por Servidor (Caso Técnico)
* **Entrada:**
    ```json
    {
      "flujoReproduccion": {
        "usuario": { "edad": 25, "tipoPlan": "Gratuito", "pais": "JP" },
        "pelicula": {
          "titulo": "Interstellar 2",
          "edadMinima": 13,
          "paisesBloqueados": ["JP", "KP"],
          "disponibleStreaming": false
        }
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "cancelar",
      "pasoDetencion": "Paso 1: Servidor",
      "motivo": "El contenido no se encuentra disponible en los servidores de streaming actualmente."
    }
    ```

---

## Arquitectura de la Solución

Para evitar una estructura piramidal de condicionales anidados (*Arrow Anti-pattern* / *If-Else Hell*), la solución se ha estructurado utilizando la cláusula de escape rápido mediante funciones de validación aisladas. Cada compuerta lógica es independiente y retorna el estado de detención en el momento que se viola la regla de negocio, lo que permite modificar, añadir o remover pasos del pipeline de streaming sin alterar el resto de la lógica del sistema.

---

## Ejecución del Módulo

1. Asegúrate de tener instalado [Node.js](https://nodejs.org/) (se recomienda la versión LTS activa).
2. Abre la terminal del sistema y navega hasta la carpeta de este ejercicio.
3. Lanza el script ejecutable mediante el comando:
    ```bash
    node maria-montepeque.js
    ```