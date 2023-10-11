let quantidadeExperiencia = 850;
let heroi = "Gabriel o Bárbaro";
let nivel;

const faixasDeExperiencia = {
  1000: "Ferro",
 2000: "Bronze",
 3000: "Prata",
 4000: "Ouro",
 6000: "Platina",
 8000: "Ascendente",
  10000: "Imortal",
};

for (let faixa in faixasDeExperiencia) {
  if (quantidadeExperiencia <= faixa) {
    nivel = faixasDeExperiencia[faixa];
    break;
  }
}

if (!nivel) {
  nivel = "Radiante";
}

console.log(heroi + " adquiriu um total de " + quantidadeExperiencia + " pontos de xp e atingiu o nível " + nivel);