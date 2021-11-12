function maiorNumero() {
    let num1 = 89;
    let num2 = 46;
    let num3 = 35;

    if (num1 > num2) return 'O número: ' + num1 + ' é maior';
    else if (num2 > num3) return 'O número: ' + num2 + ' é maior';
    else return 'O número: ' + num3 + ' é maior';
}

console.log(maiorNumero());

console.clear();
// Exercício para casa
function salarioColaborador(salario = 700, aumento, novoSalario) {
    if (salario <= 280) aumento = (salario * 20) / 100;
    else if (salario > 280 && salario <= 700) aumento = (salario * 15) / 100;
    else if (salario > 700 && salario <= 1500) aumento = (salario * 10) / 100;
    else if (salario > 1500) aumento = (salario * 5) / 100;

    return (novoSalario = salario + aumento);
}

console.log(`Salario atual: R$${salarioColaborador()}`);
