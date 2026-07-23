# Plantilla de solucion

## Analisis

* Entrada:

  * Lista de instrucciones del viaje.
  * Cada instruccion contiene un numero de paso, una accion y un destino.

* Proceso:

  * Recorrer cada instruccion del itinerario.
  * Comparar la accion recibida con las acciones permitidas.
  * Ejecutar las instrucciones validas.
  * Registrar errores cuando una instruccion no sea reconocida.
  * Guardar el resultado del recorrido completo.

* Salida:

  * Lista de acciones realizadas correctamente.
  * Mensajes indicando instrucciones invalidas.

## Reglas identificadas

1. Cada instruccion debe tener una accion permitida para poder ejecutarse.
2. Las acciones aceptadas son visitar, descansar, comer y transportarse.
3. Si una instruccion no pertenece a la lista permitida, debe marcarse como error.
4. El orden de las instrucciones debe mantenerse porque representa la ruta del viaje.

## Pruebas

### Caso normal

Entrada:

```text
[
 {
  paso: 1,
  accion: visitar,
  destino: Museo Nacional
 },
 {
  paso: 2,
  accion: comer,
  destino: Restaurante Local
 }
]
```

Resultado esperado:

```text
[
 {
  paso: 1,
  accion: visitar,
  destino: Museo Nacional
 },
 {
  paso: 2,
  accion: comer,
  destino: Restaurante Local
 }
]
```

Las instrucciones son validas y pueden ejecutarse.

---

### Caso borde

Entrada:

```text
[
 {
  paso: 1,
  accion: volar,
  destino: Ciudad desconocida
 },
 {
  paso: 2,
  accion: descansar,
  destino: Hotel Central
 }
]
```

Resultado esperado:

```text
[
 {
  paso: 1,
  accion: error,
  motivo: instruccion no reconocida
 },
 {
  paso: 2,
  accion: descansar,
  destino: Hotel Central
 }
]
```

La primera instruccion falla porque no pertenece a las acciones permitidas.

## Explicacion final

La solucion funciona porque primero define las reglas del sistema y luego analiza cada instruccion del viaje una por una.

El uso de arreglos permite almacenar todas las instrucciones y recorrerlas manteniendo el orden. La validacion evita ejecutar acciones desconocidas y permite detectar errores antes de completar el itinerario.

La funcion puede utilizarse con diferentes planes de viaje porque recibe cualquier lista de instrucciones y devuelve un resultado verificable.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.
