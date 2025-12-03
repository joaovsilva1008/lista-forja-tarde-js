function area(){
  var n1 = parseFloat(document.getElementById("n1").value)
  var n2 = parseFloat(document.getElementById("n2").value)
  var resposta = document.getElementById("resp")
    resposta.textContent = n1 * n2 + " m² "
}