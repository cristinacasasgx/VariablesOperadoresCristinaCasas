//// Ingresar el precio de compra unitario de un producto 
// y la cantidad de compra de dicho producto y un descuento. +
// Calcular y mostrar el subtotal, el monto del IVA que es el 19% del subtotal, 
// y el precio neto (precio parcial con el Monto del IVA).

// El descuento lo puse en pesos 

function productoUnitario(precioUnitario, cantidad, descuento) {

    let subtotal = precioUnitario * cantidad;
    let subtotalDescuento = subtotal - descuento;
    let iva = subtotalDescuento * 0.19;
    let precioNeto = subtotalDescuento + iva;

    return {
        subtotal,
        descuento,
        iva,
        precioNeto
    };
}

console.log(productoUnitario(7000, 5, 12000));