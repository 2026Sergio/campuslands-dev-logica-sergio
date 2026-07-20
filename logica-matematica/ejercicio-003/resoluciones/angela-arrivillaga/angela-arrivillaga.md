# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los KDA de los jugadores, un bono por transmisión (stream) y una penalización por toxicidad.
- **Proceso:** Validar si no existen escuadras para retornar 0, y calcular el puntaje final sumando el número total de escuadras registradas más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final del torneo.

## Reglas identificadas

1. Si no hay escuadras registradas en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad total de escuadras (`totalEscuadras`) y el `bonoStream`.
3. El `puntajeFinal` resulta de restar la `penalizacionToxicidad` al resultado del cálculo base.

## Pruebas

### Caso normal

**Entrada:**
```json
{ 
  "KDA_Jugadores": [3, 4, 5, 2], 
  "bonoStream": 8, 
  "penalizacionToxicidad": 3 
}
```

**Resultado esperado:**

```9```

### Caso borde

**Entrada:**
```json
{ 
  "KDA_Jugadores": [4, 5], 
  "bonoStream": 0, 
  "penalizacionToxicidad": 0 
}
```

**Resultado esperado:**

```2```

---

### Explicacion final

La función determina el puntaje basándose en la cantidad de elementos en el arreglo de escuadras. La lógica es lineal, incluyendo una validación inicial para manejar casos vacíos. Es importante destacar que, al igual que en ejercicios anteriores, el cálculo se centra en el conteo de elementos (longitud del arreglo) y no en los valores contenidos dentro de este.