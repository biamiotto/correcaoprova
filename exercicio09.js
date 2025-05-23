// Correção do exercício 09 da minha prova

let pontos = [80, 120, 75, 100, 90];
let jogadores = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

let maiorPontuacao = pontos[0];
let jogador = jogadores[0];

for (let i = 1; i < pontos.length; i++) {
    if (pontos[i] > maiorPontuacao) {
        maiorPontuacao = pontos[i];
        jogador = i;
    }
}

console.log(`O jogador foi ${jogadores[jogador]} com ${maiorPontuacao} pontos!`);

// Beatriz Miotto