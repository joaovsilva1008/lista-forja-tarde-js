function dados() {

  var n1 = document.getElementById("n1").value;

  var n2 = parseFloat(document.getElementById("n2").value);

  var nomeElement = document.getElementById("nome");
  var idadeElement = document.getElementById("idade");


    nomeElement.textContent = "Nome: " + n1;
    idadeElement.textContent = "Idade: " + n2;
 
}