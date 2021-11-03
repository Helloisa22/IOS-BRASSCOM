function maiorNumero () {
    let num1 = 89;
    let num2 = 46;
    let num3 = 35;

    if(num1 > num2)
        return "O número: " + num1 + " é maior";
    else if (num2 > num3)
        return "O número: " + num2 + " é maior";
    else
        return "O número: " + num3 + " é maior";
}

console.log(maiorNumero());