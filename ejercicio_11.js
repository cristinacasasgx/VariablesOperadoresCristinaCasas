//Un alumno desea saber cuál será su calificación final en la materia de Algoritmos.  
// Dicha calificación se compone de los siguientes porcentajes:
//55% del promedio de sus tres calificaciones parciales.
//30% de la calificación del examen final. 
//15% de la calificación de un trabajo final

function calificacionFinal(parc1, parc2, parc3, examenFinal, trabajoFinal) {
    let promedioParciales = (parc1 + parc2 + parc3) / 3;

    return (promedioParciales * 0.55) +
           (examenFinal * 0.30) +
           (trabajoFinal * 0.15);
}
console.log("La calificación final del alumno es: " + calificacionFinal(4.0, 3.8, 3.5, 3.2, 4.9));