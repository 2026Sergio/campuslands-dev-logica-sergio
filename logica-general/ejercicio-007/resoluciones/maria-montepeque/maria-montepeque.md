# Ejercicio 007: Auditor de Consistencia y Metadatos de Playlists

## Análisis del Problema

El objetivo es desarrollar un componente de auditoría que valide la integridad de una lista de reproducción, verificando que no existan canciones duplicadas, tiempos imposibles o asimetrías entre la duración declarada en la cabecera y la sumatoria real de las pistas.

* **Entrada:** Un objeto contenedor `playlistData` con la siguiente estructura:
    * `nombre`: String (Nombre de la lista de reproducción).
    * `duracionTotalDeclarada`: Number (Tiempo total esperado en segundos, $\ge 0$).
    * `canciones`: Array de objetos, donde cada objeto contiene:
        * `id`: String (Identificador único de la pista).
        * `titulo`: String (Nombre de la canción).
        * `duracionSegundos`: Number (Duración de la pista en segundos).
* **Proceso:** 1. Interceptar estructuras corruptas, nulas o colecciones vacías.
    2. Recorrer de forma lineal el arreglo de canciones para acumular el tiempo real.
    3. Validar mediante un mapa indexado o `Set` la unicidad de los identificadores (`id`).
    4. Evaluar mediante condicionales las desviaciones físicas, duplicidades y consistencia matemática de la cabecera.
* **Salida:** Un objeto con la estructura: `{ estadoPlaylist: string, accion: string, motivo: string }`.

---

## Reglas de Negocio

1. **Filtro Físico-Temporal:** Ninguna canción puede tener una duración menor o igual a cero (`duracionSegundos <= 0`). De hallarse un solo caso, el lote se clasifica como `"corrupta"`.
2. **Unicidad de Registros:** Los identificadores (`id`) operan como llaves primarias únicas. La repetición de un mismo token dentro de la lista altera la integridad del archivo, clasificando la playlist como `"corrupta"`.
3. **Consistencia de Cabecera:** La propiedad `duracionTotalDeclarada` debe coincidir exactamente con la sumatoria matemática del atributo `duracionSegundos` de todas las canciones. Si los valores difieren, la playlist se clasifica como `"inconsistente"`.
4. **Estado Óptimo:** Si se cumplen todas las reglas anteriores, la playlist se dictamina como `"consistente"`.

---

## Casos de Prueba

### 1. Playlist Totalmente Consistente (Caso Normal)
* **Entrada:**
    ```json
    {
      "playlistData": {
        "nombre": "Mix Ejercicio 2026",
        "duracionTotalDeclarada": 380,
        "canciones": [
          { "id": "SONG-01", "titulo": "Lo-Fi Beats", "duracionSegundos": 180 },
          { "id": "SONG-02", "titulo": "Synthwave Horizon", "duracionSegundos": 200 }
        ]
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "estadoPlaylist": "consistente",
      "accion": "aprobar",
      "motivo": "Playlist validada con éxito. No se detectaron anomalías ni desfases de tiempo."
    }
    ```

### 2. Desfase en Cabecera (Caso Inconsistente)
* **Entrada:**
    ```json
    {
      "playlistData": {
        "nombre": "Rock Essentials",
        "duracionTotalDeclarada": 500,
        "canciones": [
          { "id": "SONG-03", "titulo": "Back in Black", "duracionSegundos": 240 }
        ]
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "estadoPlaylist": "inconsistente",
      "accion": "recalcular",
      "motivo": "Asimetría matemática: La duración declarada (500s) no coincide con la sumatoria real (240s)."
    }
    ```

### 3. Duplicidad de Identificadores (Caso Corrupto)
* **Entrada:**
    ```json
    {
      "playlistData": {
        "nombre": "Chill Out Vibe",
        "duracionTotalDeclarada": 400,
        "canciones": [
          { "id": "SONG-04", "titulo": "Ambient Rain", "duracionSegundos": 200 },
          { "id": "SONG-04", "titulo": "Ambient Rain Pt. 2", "duracionSegundos": 200 }
        ]
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "estadoPlaylist": "corrupta",
      "accion": "rechazar",
      "motivo": "Fallo crítico de integridad: Se detectaron identificadores de canción ('SONG-04') duplicados."
    }
    ```

---

## Arquitectura de la Solución

El algoritmo procesa el catálogo en una sola iteración $O(n)$. Durante el ciclo, se inyectan las claves en una estructura de datos de acceso directo (como una tabla hash o `Set`) lo que permite resolver el control de duplicados en tiempo constante $O(1)$. Las validaciones de consistencia se ejecutan al final del ciclo mediante programación defensiva, permitiendo una rápida ramificación hacia las acciones de remediación correspondientes.

---

## Ejecución del Módulo

1. Asegúrate de disponer de [Node.js](https://nodejs.org/) instalado en tu entorno de desarrollo.
2. Abre la consola de comandos apuntando a la carpeta de este ejercicio.
3. Ejecuta el script de auditoría con el comando:
    ```bash
    node maria-montepeque.js
    ```