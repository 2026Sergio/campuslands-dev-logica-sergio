def validar_formula_quimica(formula, pesos_atomicos):
    if not isinstance(formula, str) or not isinstance(pesos_atomicos, dict):
        return None

    formula_limpia = formula.strip()
    if not formula_limpia:
        return None

    pesos_limpios = {}
    for elem, peso in pesos_atomicos.items():
        if isinstance(elem, str) and isinstance(peso, (int, float)) and not isinstance(peso, bool):
            if elem.strip() and peso > 0:
                pesos_limpios[elem.strip()] = float(peso)

    conteo_elementos = {}
    i = 0
    n = len(formula_limpia)

    while i < n:
        if not formula_limpia[i].isupper():
            return None

        simbolo = formula_limpia[i]
        i += 1

        if i < n and formula_limpia[i].islower():
            simbolo += formula_limpia[i]
            i += 1

        if simbolo not in pesos_limpios:
            return None

        str_num = ""
        while i < n and formula_limpia[i].isdigit():
            str_num += formula_limpia[i]
            i += 1

        if str_num != "":
            if str_num.startswith("0"):
                return None
            cantidad = int(str_num)
        else:
            cantidad = 1

        if cantidad <= 0:
            return None

        conteo_elementos[simbolo] = conteo_elementos.get(simbolo, 0) + cantidad

    peso_molecular_total = 0.0
    desglose = {}

    for simbolo, cantidad in conteo_elementos.items():
        peso_unitario = pesos_limpios[simbolo]
        subtotal_peso = cantidad * peso_unitario
        peso_molecular_total += subtotal_peso
        desglose[simbolo] = {
            "cantidad": cantidad,
            "peso_atómico": round(peso_unitario, 4),
            "subtotal_peso": round(subtotal_peso, 4)
        }

    return {
        "formula": formula_limpia,
        "es_valida": True,
        "peso_molecular_total": round(peso_molecular_total, 4),
        "desglose": desglose
    }


if __name__ == "__main__":
    tabla_pesos = {
        "H": 1.008,
        "O": 15.999,
        "C": 12.011,
        "Na": 22.990,
        "Cl": 35.453
    }

    caso_1 = validar_formula_quimica("H2O", tabla_pesos)
    caso_2 = validar_formula_quimica("NaHCO3", tabla_pesos)
    caso_3 = validar_formula_quimica("H02O", tabla_pesos)

    print("Resultados de Validación de Fórmulas Químicas:")
    print(caso_1)
    print(caso_2)
    print(caso_3)