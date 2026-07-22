//Lea dos números y calcule el resultado de su suma, resta, multiplicación y división.

function operaciones(a, b) {
    return {
        suma: a + b,
        resta: a - b,
        multiplicacion: a * b,
        division: a / b,
    };
}
console.log(operaciones(15, 3));