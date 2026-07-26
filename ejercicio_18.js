//// En una universidad los estudiantes pueden pagar el valor de su matrícula 
// en cuatro cuotas de la siguiente forma 

//Primera cuota: 40% 
//Segunda cuota: 25%
//Tercera cuota: 20% 
//Cuarta cuota: 15% 


function matriculaUniversitaria(valorMatricula) {

    let cuota1 = valorMatricula * 0.40;
    let cuota2 = valorMatricula * 0.25;
    let cuota3 = valorMatricula * 0.20;
    let cuota4 = valorMatricula * 0.15;

    return {
        cuota1,
        cuota2,
        cuota3,
        cuota4
    };
}

console.log(matriculaUniversitaria(22000000));