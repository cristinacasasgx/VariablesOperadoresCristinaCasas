//// 17.Desarrollar un algoritmo que permita generar la colilla de pago de los empleados de una empresa. 
// La colilla debe mostrar:
//El Salario del Empleado 
//El Valor de Ahorro mensual programado.
//La suma a deducir por aporte a la Salud (EPS) 12,5 %
//La suma a deducir por aporte al Fondo de Pensiones  16%
//Total a Recibir 
//Toda la información que debe proveer el usuario del programa es
// el  Salario del Empleado y el Valor de Ahorro mensual programado. 
// El programa debe calcular y devolver el resto de los datos.

function colillaEmpleado(salario, ahorroMensual) {

    let salud = salario * 0.125;
    let pension = salario * 0.16;
    let totalRecibir = salario - salud - pension - ahorroMensual;

    return {
        salario,
        ahorroMensual,
        salud,
        pension,
        totalRecibir
    };
}

console.log(colillaEmpleado(2000000, 100000));