function num() {

    var n1 = document.getElementById("n1").value.toUpperCase();
    var i1 = parseFloat(document.getElementById("i1").value);


    if (isNaN(i1)) {
        document.getElementById('resp').innerHTML = 'Idade inválida';
        return;
    }


    if (n1 === 'F' && i1 >= 40) {
        document.getElementById('resp').innerHTML = 'reseve o desconto';
    } else if (n1 === 'M' && i1 >= 50) {
        document.getElementById('resp').innerHTML = 'reseve desconto';
    } else {
        document.getElementById('resp').innerHTML = 'Não reseve desconto';
    }
}