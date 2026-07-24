// Se trata de escribir el algoritmo que permita emitir la factura correspondiente a una compra de varios artículos (4)
// determinados, del que se adquieren una o varias unidades. El IVA es del 19%.

function facturaProductos(art1, art2, art3, art4) {
    let subtotal = art1 + art2 + art3 + art4;
    let iva = subtotal * 0.19;
    let total = subtotal + iva;

    return { subtotal, iva, total };
}
console.log("La factura del cliente es:", facturaProductos(15000, 24000, 11000, 21000));
