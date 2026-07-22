# Lógica general 074 - Perímetro y área ## Análisis
### Entrada

```javascriptconst inventarioTatuajes = [    {id:1, estilo:"Realismo", zona:"Brazo", ancho:15, alto:20, estado:"Terminado"},    {id:2, estilo:"Tradicional", zona:"Espalda", ancho:5, alto:30, estado:"En proceso"},    {id:3, estilo:"Minimalista", zona:"Muñeca", ancho:2, alto:2, estado:"Terminado"},    {id:4, estilo:"Artístico", zona:"Cuello", ancho:8, alto:0, estado:"Cancelado"}];```
### Proceso
```text1. Validar que existan tatuajes registrados.2. Recorrer el arreglo.3. Verificar que el ancho y el alto sean mayores que cero.4. Calcular el área.5. Calcular el perímetro.6. Evaluar el estado del tatuaje.7. Contar los tatuajes terminados.```
### Salida

```textEstilo del tatuaje.Área.Perímetro.Estado del tatuaje.Cantidad de tatuajes terminados.```

## Reglas identificadas
```text- El arreglo no debe estar vacío.- El ancho y el alto deben ser mayores que cero.- El área se calcula multiplicando el ancho por el alto.- El perímetro se calcula con la fórmula 2 × (ancho + alto).- Si el tatuaje está terminado y el área es mayor o igual a 50 cm², se considera finalizado correctamente.- Si está en proceso, continúa en elaboración.- Si está cancelado o tiene medidas inválidas, no cumple los requisitos.```

## Pruebas
### Caso normal

#### Entrada
```javascriptcalcularAreaPerimetro(inventarioTatuajes);```
#### Resultado esperado
```textRealismoÁrea: 300 cm²Perímetro: 70 cmTatuaje finalizado correctamente.TradicionalÁrea: 150 cm²Perímetro: 70 cmEl tatuaje continúa en elaboración.MinimalistaÁrea: 4 cm²Perímetro: 8 cmEl tatuaje fue cancelado o no cumple los requisitos.ArtísticoMedidas inválidas.Total de tatuajes terminados: 1```

### Caso borde#### Entrada

```javascriptcalcularAreaPerimetro([]);```
#### Resultado esperado
```textNo hay tatuajes registrados.```
## Explicación final

```textLa solución verifica que existan tatuajes registrados y recorre el arreglo. Para cada tatuaje valida que las medidas sean correctas, calcula el área y el perímetro mediante las fórmulas correspondientes y evalúa el estado del trabajo. Finalmente muestra los resultados y cuenta cuántos tatuajes terminados cumplen con las condiciones establecidas.```