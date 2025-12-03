function desconto(){
  var n1 = document.getElementById("n1").value
  var n2 = document.getElementById("n2").value
  var resposta = document.getElementById("resp")
  resposta.textContent = ((n1 *  n2) * 10 / 100) + "R$" + " Com seu desconto do 10% Aplicado"


}