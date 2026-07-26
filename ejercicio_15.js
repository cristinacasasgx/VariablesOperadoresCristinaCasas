//Suponga que tiene Ud. una tienda y desea registrar las ventas en una computadora. 
// Diseñe un algoritmo en pseudocódigo que lea por cada cliente: 
//El monto de la venta, calcule e imprima el IVA.
//calcule e imprima el total a pagar 
//lea la cantidad con la que paga el cliente (solo efectivo), calcule e imprima el cambio

function calculoTienda(monto, pago) {
    let iva = monto * 0.19;
    let total = monto + iva;
    let cambio = pago - total;

    return { iva, total, cambio };
}
console.log("El cálculo de la venta es:", calculoTienda(127000, 170000));