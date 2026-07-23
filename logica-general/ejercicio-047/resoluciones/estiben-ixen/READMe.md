# Plantilla de solucion

## Analisis

* Entrada:

  * Lista de canciones de una playlist.
  * Cada cancion contiene titulo, artista y estado.

* Proceso:

  * Recorrer cada elemento de la playlist.
  * Validar que la informacion de cada cancion este completa.
  * Revisar que el estado de la cancion sea permitido.
  * Comparar titulos para encontrar canciones repetidas.
  * Guardar todas las inconsistencias encontradas.

* Salida:

  * Lista de inconsistencias detectadas.
  * Motivo por el cual cada elemento necesita revision.

## Reglas identificadas

1. Una cancion debe tener titulo y artista para considerarse valida.
2. Los estados permitidos son solamente "activo" y "oculto".
3. Una cancion no puede aparecer repetida dentro de la misma playlist.

## Pruebas

### Caso normal

Entrada:

```text
playlist:
[
 {
  titulo: "Noche Estelar",
  artista: "Grupo Azul",
  estado: "activo"
 },
 {
  titulo: "Ritmo Digital",
  artista: "Sonido Tech",
  estado: "activo"
 }
]
```

Resultado esperado:

```text
[]
```

No se encuentran inconsistencias porque todos los datos cumplen las reglas.

---

### Caso borde

Entrada:

```text
playlist:
[
 {
  titulo: "Noche Estelar",
  artista: "Grupo Azul",
  estado: "activo"
 },
 {
  titulo: "Noche Estelar",
  artista: "Grupo Azul",
  estado: "activo"
 },
 {
  titulo: "",
  artista: "",
  estado: "bloqueado"
 }
]
```

Resultado esperado:

```text
[
 {
  cancion: "Noche Estelar",
  motivo: "cancion repetida"
 },
 {
  cancion: "sin titulo",
  motivo: "informacion incompleta"
 },
 {
  cancion: "sin titulo",
  motivo: "estado no permitido"
 }
]
```

## Explicacion final

La solucion funciona porque primero organiza las reglas del problema y luego analiza cada cancion individualmente.

El ciclo permite revisar todos los elementos de la playlist, mientras que los arreglos ayudan a almacenar canciones ya revisadas y las inconsistencias encontradas.

La funcion principal puede reutilizarse con cualquier playlist porque recibe los datos como entrada y devuelve solamente los problemas detectados.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
