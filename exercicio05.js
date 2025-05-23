// Correção do exercício 5 da minha prova

let compartilhamentos = [50, 70, 90, 150, 60, 40];
let i = 0;
let maior = compartilhamentos[0];

while (i < compartilhamentos.length) {
    if (compartilhamentos[i] > maior) {
        maior = compartilhamentos[i];
    }
    i++;
}

console.log(maior);

// Beatriz Miotto