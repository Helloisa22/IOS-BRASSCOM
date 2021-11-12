function alertCookie () {
    alert('Você quer um cookie');
    console.log('Você quer um cookie')
}

const alertSucesso = () => {
    alert('Mensagem gerada com sucesso');
    console.log('Mensagem gerada com sucesso')
}


//Objeto
const notebook = {
    marca: "DELL",
    modelo: "XPTO100",
    cor: "Verde",
    ano: 2020,
    fabricante: "dell"
}

console.log(notebook);


// Media de nota
const media = (nota1 =3, nota2 = 7, nota3 = 5, nota4 = 10) => {
    return (nota1 + nota2+ nota3 + nota4) / 4;
}

// Clesiu para Fahrenheit
function celsius (num1 = 23) {
    return (num1*1.8) + 32;
}