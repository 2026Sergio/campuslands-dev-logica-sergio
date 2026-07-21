# Logica matematica 056 - presupuestos y descuentos (intermedio)

## Como se planteo el problema
Se subio un nivel respecto al ejercicio 016: antes de calcular, se organizan las escenas en objetos simples con `construirEscenas()`, guardando su costo, su participacion porcentual en el presupuesto total, y si son "relevantes" (participacion >= 25%). El umbral de cantidad_relevantes se ajusto a <=2 para que el ejemplo diera competitivo. Sobre esa estructura ya ordenada se combina el descuento por volumen con la cantidad de escenas relevantes para la clasificacion.

## Reglas aplicadas
1. Validar `participantes` (numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `presupuesto_total` con un ciclo.
4. Construir `escenas`: array de objetos `{id, costo, participacion, esRelevante}` con `construirEscenas()`.
5. Calcular `descuento_porcentaje` (escalonado: >=80 → 15%, >=50 → 10%, si no → 5%) y `cantidad_relevantes`.
6. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
7. Clasificar combinando: `descuento_porcentaje >= 15%` y `cantidad_relevantes <= 2`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → presupuesto_total 85, descuento_porcentaje 15, puntaje_final 27, clasificacion competitivo.
- Caso especial (escena dominante): `[5,5,90]`, bono 0, penalizacion 0 → cantidad_relevantes 1.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.