//Se tienen tres baldes de agua, uno de cinco litros, otros de tres litros y otro de un litro; 
// si el de un litro tarda una hora y media en llenarse, resuelva cuanto tiempo pueden tardar en llenarse los otros baldes. 
// Si tiene tres baldes, pero se desconoce su tamaño debe de resolver igualmente el ejercicio. 


function calcularTiempo(litros, litrosBase, tiempoBase) {
    return (litros * tiempoBase) / litrosBase;
}

const litrosBase = 1;
const tiempoBase = 1.5;

console.log(calcularTiempo(3, litrosBase, tiempoBase)); 
console.log(calcularTiempo(5, litrosBase, tiempoBase)); 