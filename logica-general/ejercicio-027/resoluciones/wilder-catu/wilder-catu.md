# Detección de Inconsistencias - Playlist Musical

## Descripción

Este programa analiza una playlist musical y detecta posibles errores en la información almacenada.

El objetivo es verificar que los datos sean correctos antes de utilizarlos en una aplicación.

---

# Objetivo

Detectar automáticamente canciones con información incorrecta.

Las validaciones son:

- Título vacío.
- Artista vacío.
- Duración menor o igual a cero.
- Reproducciones negativas.
- Canciones duplicadas.

---

# Tecnologías

- JavaScript

---

# Estructura del programa

El programa está dividido en tres partes.

## 1. Base de datos

Se crea un arreglo llamado:

```javascript
const playlist = [];
```

Cada posición representa una canción.

Ejemplo:

```javascript
{
    titulo: "Believer",
    artista: "Imagine Dragons",
    duracion: 204,
    reproducciones: 3500,
    disponible: true
}
```

---

## 2. Función detectarInconsistencias()

Esta función recorre todas las canciones utilizando un ciclo **for**.

Durante el recorrido valida:

### Título

```javascript
if(cancion.titulo.trim() === "")
```

Verifica que exista un nombre.

---

### Artista

```javascript
if(cancion.artista.trim() === "")
```

Comprueba que tenga artista.

---

### Duración

```javascript
if(cancion.duracion <= 0)
```

La duración debe ser mayor que cero.

---

### Reproducciones

```javascript
if(cancion.reproducciones < 0)
```

No pueden existir reproducciones negativas.

---

### Canciones duplicadas

Se utiliza un arreglo llamado

```javascript
revisadas
```

Si una canción ya existe, se agrega al arreglo

```javascript
cancionesDuplicadas
```

---

## 3. Función generarReporte()

Esta función imprime todos los resultados utilizando:

```javascript
console.log()
```

Muestra:

- Lista de errores
- Lista de duplicados

---

# Complejidad

El algoritmo recorre la playlist una sola vez.

Complejidad temporal:

O(n)

donde **n** representa el número de canciones.

---

# Resultado esperado

Al ejecutar el programa se obtiene un reporte similar a:

```
================================
REPORTE DE INCONSISTENCIAS
================================

Errores encontrados:

- Canción 2: No tiene título.
- Canción 3: No tiene artista.
- Canción 4: Duración inválida.
- Canción 5: Reproducciones negativas.

Canciones duplicadas:

- Perfect-Ed Sheeran
```

