//Dadas las 3 notas de un aprendiz, calcule la definitiva de la asignatura si la primera nota tiene un valor del 20%, la segunda del 30% y la última del 50%.

function definitiva (n1, n2, n3) {
    return (n1 * 0.20) + (n2 * 0.30) + (n3 * 0.50);
}
console.log(definitiva(3.5, 4.1, 3.9));