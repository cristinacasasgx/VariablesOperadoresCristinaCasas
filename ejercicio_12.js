// Un maestro desea saber qué porcentaje de hombres y qué porcentaje de mujeres hay en un grupo de alumnos.

function PorcentajeHombresyMujeres(hombres, mujeres){
let total = hombres + mujeres;

    return {
        hombres: (hombres / total) * 100,
        mujeres: (mujeres / total) * 100
    };
}
console.log("El porcentaje de hombres y mujeres en el grupo es: ", PorcentajeHombresyMujeres(20, 5));
