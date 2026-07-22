//Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuánto deberá pagar finalmente por su compra.

function compraConDescuento(compra) {
    const descuento = compra * 0.15;
    const valorFinal = compra - descuento;
    return valorFinal;
}
console.log("El total a pagar con el descuento aplicado es: " + compraConDescuento(1750000));