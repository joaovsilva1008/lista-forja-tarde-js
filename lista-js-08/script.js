function num(){
  var n1 = parseFloat(document.getElementById("n1").value)
  var resposta = document.getElementById("resp")
    resposta.textContent = n1 * 3 + " É o triplo de seu número "
}