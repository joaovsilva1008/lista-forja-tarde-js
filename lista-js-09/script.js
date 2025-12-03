function num(){
  var n1 = parseFloat(document.getElementById("n1").value)
    
  if(n1 >= 6){
    document.getElementById('resp').textContent = 'Você passou de ano👌'
  }else{
    document.getElementById('resp').innerHTML = resultadoStr = 'Você Reprovou🤣'
  }
}