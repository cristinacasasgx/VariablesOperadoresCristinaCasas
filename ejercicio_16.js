// Suponga que un conductor le pide a usted que le haga un algoritmo para calcular cuánto le corresponde 
// en un día trabajado, teniendo en cuenta que tiene derecho a el 19% del total recaudado.

function pagoConductor(totalRecaudado) {
    let pago = totalRecaudado * 0.19;

    return pago;
}

console.log(pagoConductor(102000));