# Plantilla de solucion

## Analisis

* Entrada:

  * Lista de trabajos de soldadura.
  * Cada trabajo contiene nombre del cliente y tipo de trabajo solicitado.

* Proceso:

  * Validar que existan trabajos registrados.
  * Recorrer la lista en orden de llegada.
  * Asignar un número de turno a cada trabajo.
  * Marcar el primer trabajo como activo.
  * Mantener los demás trabajos en estado pendiente.

* Salida:

  * Lista organizada de turnos.
  * Estado actual de cada trabajo.
  * Mensaje cuando no existen trabajos.

## Reglas identificadas

1. Los trabajos deben organizarse respetando el orden de llegada.
2. Cada trabajo debe recibir un número de turno único.
3. El primer turno disponible pasa a estado "en proceso".
4. Los demás turnos quedan como "pendientes".
5. Si no existen trabajos, el sistema debe indicar que no hay turnos.

## Pruebas

### Caso normal

Entrada:

```text
[
 {
  cliente: Carlos,
  tipo: soldadura de estructura
 },
 {
  cliente: Maria,
  tipo: reparacion metalica
 },
 {
  cliente: Pedro,
  tipo: fabricacion de pieza
 }
]
```

Resultado esperado:

```text
[
 {
  turno: 1,
  cliente: Carlos,
  trabajo: soldadura de estructura,
  estado: en proceso
 },
 {
  turno: 2,
  cliente: Maria,
  trabajo: reparacion metalica,
  estado: pendiente
 },
 {
  turno: 3,
  cliente: Pedro,
  trabajo: fabricacion de pieza,
  estado: pendiente
 }
]
```

El sistema asigna los turnos siguiendo el orden de llegada.

---

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
{
 estado:
 sin turnos

 mensaje:
 no existen trabajos pendientes
}
```

No existen solicitudes para asignar.

## Explicacion final

La solución funciona porque organiza los trabajos mediante una cola de atención. Cada elemento de la lista representa una solicitud de soldadura y recibe un turno según su posición.

La función mantiene una separación clara entre los datos recibidos y la lógica de asignación, permitiendo agregar nuevas reglas como prioridades, tiempos estimados o tipos de soldadura especiales.

El sistema puede utilizarse con diferentes cantidades de trabajos porque procesa la lista de manera dinámica.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
