// Correção do exercício 10 da minha prova

let ataques = [40, 50, 70, 80, 60];
let vidaCastelo = 500;

for (let i = 0; i < ataques.length; i++) {
    vidaCastelo = vidaCastelo - ataques[i];
}

if (vidaCastelo > 0) {
    console.log(`O castelo resistiu com ${vidaCastelo} pontos de vida!!`);
} else {
    console.log(`O castelo foi destruído!`)
}

// Beatriz Miotto