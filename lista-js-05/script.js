function area() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  var resposta = document.getElementById("resp");

  var resultadoNumerico = n1 + n2 / 2;

  var resultadoFormatado = resultadoNumerico.toFixed(2);

  resposta.textContent = resultadoFormatado + " Kl ";
}