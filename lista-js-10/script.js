function num() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);

    if (n1 === n2) {
        document.getElementById('resp').innerHTML = 'Tem a mesma idade';
    } else if (n1 > n2) { 
        document.getElementById('resp').innerHTML = 'Pessoa 1 é mais velha';
    } else { 
        document.getElementById('resp').innerHTML = 'Pessoa 2 é mais velha';
    }
}
