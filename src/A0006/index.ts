// Tupla
const dadosCliente1: readonly [number, string] = [1, 'Gustavo'];
const dadosCliente2: [number, string, string?] = [1, 'Gustavo', 'Jezini'];
const dadosCliente3: [number, string, ...string[]] = [1, 'Gustavo', 'Jezini'];

// Nao pode ser feito pois o tipo é undefined
// dadosCliente1[1] = 'Jezini'; // Nao esta permitindo pq readonly torna imutavel
dadosCliente2[2] = 'Teste';
dadosCliente3[3] = 'Tupla..';
dadosCliente3[4] = '..Aberta';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
