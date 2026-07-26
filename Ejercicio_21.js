// Realice un algoritmo que permita realizar el cálculo del siguiente enunciado, 
// se solicita el año de nacimiento del aprendiz, el nombre, la dirección, 
// se requiere conocer la edad de la persona y la información completa ingresada. 

function Aprendiz(nombre, direccion, anioNacimiento) {

    let anioActual = 2026;
    let edad = anioActual - anioNacimiento;

    return {
        nombre,
        direccion,
        anioNacimiento,
        edad
    };
}

console.log(Aprendiz("Cristina", "Medellín", 2005));