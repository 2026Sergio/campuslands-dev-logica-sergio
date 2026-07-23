# Logica matematica 045 - minimos y limites (analisis)

## Como se planteo el problema
Este ejercicio comparte tematica y dificultad con el 025, por lo que se reutilizo la misma logica ya validada: combinar el margen de seguridad del repuesto minimo (permitiendo valores negativos como alerta real) con el riesgo de desabasto del taller.

## Reglas aplicadas
1. Validar que `participantes` sea un array no vacio de numeros finitos y no negativos.
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `minimo` y `margen_seguridad = minimo - penalizacion` (puede ser negativo).
4. Calcular `riesgo_desabasto = cantidad_bajo_promedio / total`.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `margen_seguridad >= bono` y `riesgo_desabasto <= 0.5`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → margen_seguridad 9, riesgo_desabasto 0.5, puntaje_final 27, clasificacion competitivo.
- Caso especial (margen negativo): `[3,10,14]`, bono 0, penalizacion 8 → margen_seguridad -5.
- Caso borde (valor negativo): `[12,-3,20]`, bono 5, penalizacion 2 → retorna error controlado.