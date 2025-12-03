function contar() {
    const num = Number(document.getElementById('numeroInput').value);

    if (isNaN(num)) {
        document.getElementById('result').textContent = 'Informe um número válido';
        return;
    }

    let resultadoStr = "";

    if (Number.isInteger(num)){

        for (let i = 0; i <= 10; i++) {
            let resultado = num + i;
            resultadoStr += `${num} + ${i} = ${resultado}<br>`;
        }

        document.getElementById('result').innerHTML = resultadoStr;

    } else { 
        alert("Entrada inválida. Por favor, digite um número *inteiro*.");
    }
}