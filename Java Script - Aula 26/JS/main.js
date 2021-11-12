// let string = 'Instituto da Oportunidade Social';

// // Acessando o primiro caracter
// console.log(string.charAt(3));
// console.log(string[0]);

// console.clear();

// let texto = 'Heloisa';
// console.log(texto.length);

// console.clear();

// let s = 'hello world!';
// console.log(s.toUpperCase());

// let d = 'HELLO WORLD!';
// console.log(d.toLowerCase());

// console.clear();

// let str = 'Heloisa';
// console.log(str.substring(0, 4));
// console.log(str.substring(4));

// console.clear();

// const srt1 = 'A raposa é um animal esperto';

// const palavras = srt1.split(' ');
// console.log(palavras[3]);

// console.clear();

// let mensagem = 'Venha para a Microsoft';
// console.log(mensagem);

// let novaMensagem = mensagem.replace('Microsoft', 'IOS');
// console.log(novaMensagem);

// console.clear();

// let text = '     Olá Alunas do IOS!     ';
// console.log(text);
// console.log(text.trim());

// console.clear();

// let frase = 'Sou um aluno do IOS e o IOS é muito bom!';

//console.log(frase.indexOf('do'));
//console.log(frase.indexOf('IOS'));

//console.log(frase.lastIndexOf('IOS'));
//console.log(frase.indexOf('IOS'));

//console.log(frase.startsWith('D'));
//console.log(frase.startsWith('um'));

//console.log(frase.endsWith('bom!'));
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
// console.log(text.trim());// const str = 'Mozilla';
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
