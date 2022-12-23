function calcularNumeroF(numeroF){
    if (numeroF == 0) {
        return  1
    } 
    else {
        return numeroF * calcularNumeroF(numeroF-1)
    }
}


let numeroF = prompt("De que numero quieres saber el factorial")
 
while(isNaN(numeroF)) {
    numeroF = prompt(`${numeroF} no es un numero, inténtelo denuevo`);
}

console.log(`${calcularNumeroF(numeroF)}`)