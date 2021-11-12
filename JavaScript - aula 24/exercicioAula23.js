const frutas1 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let a = frutas1;

console.log(frutas1);

console.clear();
//Inserir e Amanda
//unshift
const frutas2 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let w = frutas2.unshift('Amanda');
let t = frutas2.pop(); // w = 3
let k = frutas2.push('Zuleica');
let o = frutas2.shift();
let v = delete frutas2[2];
frutas2[2] = 'Silvana';

console.log(frutas2);
