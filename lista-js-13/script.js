function area() {
    var n1 = parseFloat(document.getElementById("n1").value)
    var resposta = document.getElementById("resp")
    
    var res = n1 % 5
    
    
    if (res === 0) {
       
        resposta.innerHTML = 'É múltiplo de 5 ✅'
        
    } else {
        
        resposta.innerHTML = `Você é burro, Não é múltiplo de 5.😒`
    }
}
