// Correção do exercício 06 da minha prova

let passeios = [1, 2, 3, 2, 1];
let totalPasseios = 0;

for (let i = 0; i < passeios.length; i++) {
    totalPasseios = totalPasseios + passeios[i];
}

console.log(`Total de passeios:` , totalPasseios);

if (totalPasseios > 8) {
    console.log(`Cilista profissional!!`);
} else {
    console.log(`Continue pedalando!!`)
}

// Beatriz Miotto