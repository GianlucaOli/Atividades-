let nota = 1;

while (nota !== 0) {
  const prompt = require("prompt-sync")();

  const nota1 = Number(prompt("Insira a nota : "));
  const nota2 = Number(prompt("Insira a nota : "));
  const media = (nota1 + nota2) / 2;

  if (media > 85) {
    console.log("Voce passou com a nota final acima da média. ");
  } else if (media >= 70 && media <= 85) {
    console.log("Voce passou com a nota final na média. ");
  } else {
    console.log("Voce nao passou, nota final abaixo da média. ");
  }

  nota = parseInt(
    prompt("Deseja calcular a media de um aluno? \n (1-sim) (2-não)  ")
  );

  if (nota == 2) {
    console.log("Encerrando o programa.");
    break;
  }

  if (nota == 1) {
    continue;
  }
}