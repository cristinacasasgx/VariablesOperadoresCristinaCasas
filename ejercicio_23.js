// Una persona tarda 5 horas en subir una montaña de 7 metros, si un escalador desea subir más o menos de la montaña, 
// cuanto tiempo tarda en subir. Debe de resolver el ejercicio. 


function calcularEscalada(metros) {
    const metrosBase = 7;
    const tiempoBase = 5;

    const velocidad = metrosBase / tiempoBase;

    return metros / velocidad;
}

console.log("Subir 10m:", calcularEscalada(9), "horas");
console.log("Subir 3m:", calcularEscalada(5), "horas");