def resolver_pingpong(puntos_jugador_a, puntos_jugador_b):
    if puntos_jugador_a < 0 or puntos_jugador_b < 0:
        return "Error: Los puntos no pueden ser negativos"
    
    diferencia = abs(puntos_jugador_a - puntos_jugador_b)
    
    if (puntos_jugador_a >= 11 or puntos_jugador_b >= 11) and diferencia >= 2:
        if puntos_jugador_a > puntos_jugador_b:
            return "Ganador: Jugador A"
        else:
            return "Ganador: Jugador B"
    elif puntos_jugador_a < 11 and puntos_jugador_b < 11:
        return "El juego continua"
    else:
        return "El juego continua (Deuce)"

jugador_a = 12
jugador_b = 10
print(resolver_pingpong(jugador_a, jugador_b))