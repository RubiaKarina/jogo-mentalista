var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
var contador = 0;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    contador++;
    elementoResultado.innerHTML =
      "Você acertou com " + contador + " tentativas.";
    document.getElementById("botao").disabled = true;
  }
  // se não cumprir os requisitos
  else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar o número de 0 a 10";
  } else {
    if (numeroSecreto < 5) {
      //dicas
      // contador
      contador++;
      elementoResultado.innerHTML =
        "Você errou. Você tem mais " +
        (tentativas - contador) +
        "           tentativas <br> Dica: número secreto é menor que 5";
    } else {
      contador++;
      elementoResultado.innerHTML =
        "Você errou. Você tem mais " +
        (tentativas - contador) +
        "       tentativas  <br> Dica: número secreto é maior que 5";

      if (contador == 3) {
        document.getElementById("botao").disabled = true;
        elementoResultado.innerHTML =
          "Game Over! <br> O número sorteado era " +
          numeroSecreto +
          "<br>clique em reiniciar, para jogar de novo";
        document.getElementById("botao").disabled = true;
      }
    }
  }
}
function Reiniciar() {
  window.location.href = window.location.href;
}
// quando perde as 3 tentativas ou ganha, desabilitei o botão
// acrescentei o botão de reiniciar