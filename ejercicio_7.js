//Dada una cantidad de tiempo medida en horas, minutos y segundos, diga a cuántos segundos equivale.

function aSegundos(horas, minutos, segundos) {
    return (horas * 3600) + (minutos * 60) + segundos;
}
console.log(aSegundos(5, 25, 45));