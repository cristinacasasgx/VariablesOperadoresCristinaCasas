//Lea la cantidad de dinero correspondiente a una compra y calcule el valor del IVA (19%), y el valor total de la factura, si al valor de la compra se le autoriza un descuento del 10% (antes de aplicarle el IVA).

function factura(compra) {
    let descuento = compra * 0.10;
    let subtotal = compra - descuento;
    let iva = subtotal * 0.19;
    let total = subtotal + iva;

    return {
        subtotal,
        iva,
        total
    };
}
console.log(factura(150000));