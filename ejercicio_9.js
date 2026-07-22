//Un vendedor recibe un sueldo base más un 10% extra por comisión de sus ventas, 
// el vendedor desea saber cuánto dinero obtendrá por concepto de comisiones por las tres ventas que realiza en el mes 
// y el total que recibirá en el mes tomando en cuenta su sueldo base y comisiones.

function calcularSueldoConComisiones(sueldoBase, venta1, venta2, venta3) {
  const totalVentas = venta1 + venta2 + venta3;
  const comision = totalVentas * 0.10;
  const totalMes = sueldoBase + comision;

    console.log("El total de comisiones es: " + comision);
    console.log("El total a recibir en el mes es: " + totalMes);
}

calcularSueldoConComisiones(2000000, 750000, 1100000, 8000000);