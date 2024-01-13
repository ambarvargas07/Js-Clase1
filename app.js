function elevarAlExponente(base, exponente) {
    return Math.pow(base, exponente);
}

function calcularRaizCuadrada(numero) {
    if (numero < 0) {
        return "Error: No se puede calcular la raíz cuadrada de un número negativo.";
    } else {
        return Math.sqrt(numero);
    }
}

let num1;
let num2;
let opciones;
let resultado;

const SALIR = "3";

function obtenerNumero(dato) {
    let valor = prompt(dato);
    if (valor === null) {
        return null;
    }
    valor = parseFloat(valor);
    return isNaN(valor) ? null : valor;
}

let continuar = true;

do {
    opciones = prompt("Bienvenido al asistente matemático\n\nElige una opción:\n1) Elevar al exponente\n2) Calcular raíz cuadrada\n3) Salir");
    if (opciones === null || opciones === SALIR) {
        alert("Gracias por usar el asistente matemático. ¡Hasta luego!");
        continuar = false;
        break;
    }

    switch (opciones) {
        case "1":
            num1 = obtenerNumero("Por favor ingresa la base:");
            num2 = obtenerNumero("Por favor ingresa el exponente:");
            if (num1 !== null && num2 !== null) {
                resultado = elevarAlExponente(num1, num2);
                alert("Resultado: " + resultado);
            }
            break;

        case "2":
            num1 = obtenerNumero("Por favor ingresa el número para calcular su raíz cuadrada:");
            if (num1 !== null) {
                resultado = calcularRaizCuadrada(num1);
                alert("Resultado: " + resultado);
            }
            break;

        default:
            alert("Esta opcion es inexistente. Intentalo de nuevo. ej: 1,2,3");
            break;
    }
} while (continuar);












