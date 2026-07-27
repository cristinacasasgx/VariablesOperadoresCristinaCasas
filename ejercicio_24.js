// Un estudiante realiza un préstamo a un plazo de 5 años, donde la tasa fija de interés es del 5% anual, 
// se debe solicitar el monto del préstamo y se desea calcular la siguiente información. 

// Cuanto dinero se ha pagado de intereses en un año. 
// Cuanto dinero se ha pagado de intereses en el tercer trimestre del año. 
// Cuanto dinero se ha pagado de intereses en el primer mes. 
// Cuanto dinero se paga en total del préstamo solicitado incluyendo intereses. 

function prestamoAcademico(monto) {
    const tasa = 0.05;
    const años = 5;

    const interesAnual = monto * tasa;

    const interesTrimestre = interesAnual / 4;

    const interesMes = interesAnual / 12;

    const interesTotal = monto * tasa * años;

    const totalPagar = monto + interesTotal;

    return {
        interesAnual,
        interesTrimestre,
        interesMes,
        interesTotal,
        totalPagar
    };
}


let resultado = prestamoAcademico(100000000);
console.log(resultado);