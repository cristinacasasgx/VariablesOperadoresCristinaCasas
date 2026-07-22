//Suponga que un individuo desea invertir su capital en un banco y desea saber cuánto dinero ganará después de un mes si el banco paga a razón de 2% mensual.

function interesMensual(capital) {
    return capital * 0.02;
}
console.log("Usted ganará " + interesMensual(1000000)  + " pesos después de un mes.");