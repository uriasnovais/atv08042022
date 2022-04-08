let numero_1 = 1
let numero_2 = 10

function soma_entre(numero_1: number, numero_2: number){
    let soma = 0
    for (let numero = numero_1; numero <= numero_2; numero++){
        soma += numero
    }
    return soma
}

console.log(soma_entre(numero_1, numero_2))