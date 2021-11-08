// const str = 'Mozilla';
// console.log(str.substring(2, 4));

// console.log(`Aqui vai um template strings ${expressão_do_JavaScript}`);

// // Maiusculo e minúsculo
// console.clear();
// const s = 'Hello World!';

// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// const str = 'Mozilla';

// console.log(str.substring(1, 3));
// // Saída esperada: "oz"

// console.log(str.substring(2));
// // Saída esperada: "zilla"

// const str1 = 'A raposa é um animal esperto';

// const palavras = str1.split(' ');
// console.log(palavras[3]);
// // Saída esperada: "um"

// const chars = str1.split('');
// console.log(chars[7]);
// // Saída esperada: "a"

// const strCopy = str1.split();
// console.log(strCopy);
// // Saída esperada: Array ["A raposa é um animal esperto"]

// // Substituir string
// console.clear();
// let mensagem = 'Venha para a Microsoft!';
// console.log(mensagem);
// let novaMensagem = mensagem.replace('Microsoft', 'IOS');
// console.log(novaMensagem);

// //Remover Espaços
// console.clear();
// let text = '       Olá Alunos do IOS!        ';
// console.log(text.trim());

console.clear();

let aluno = {
    lastname: 'Beatriz',
    firstname: 'Heloisa',
    Ano: '3° B',
    nota: [3, 5, 6, 7],
    MateriaPreferida: 'Biologia',
    endereco: {
        rua: 'Rua corona',
        numero: 23,
        cidade: 'São Paulo',
        Estado: 'Maringa',
    },
};

console.log(
    `O aluno ${aluno.firstname.toUpperCase()} mora na rua ${
        aluno.endereco.rua
    } `
);
