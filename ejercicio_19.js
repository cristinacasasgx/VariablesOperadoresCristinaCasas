//// Ingresar, para un estudiante, sus 5 notas de un curso, nombre, programa, ficha.  
// Hacer un algoritmo que:

//Muestre el nombre
//Muestre el programa de formación

//Se debe calcular y mostrar su promedio final.

function promedioConCincoNotas(nombre, programa, ficha, n1, n2, n3, n4, n5) {

    let promedio = (n1 + n2 + n3 + n4 + n5) / 5;

    return {
        nombre,
        programa,
        ficha,
        promedio
    };
}

console.log(promedioConCincoNotas("Cristina", "FÍSICA", 2876541, 4.5, 4.2, 5, 3.8, 4.6));