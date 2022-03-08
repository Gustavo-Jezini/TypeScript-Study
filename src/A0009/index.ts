// enum =>  para enumerar algo
enum Cores {
  VERMELHO,   // 0
  AZUL,       // 1
  AMARELO,    // 2
};

console.log(Cores);
// {
//   '0': 'VERMELHO',
//   '1': 'AZUL',
//   '2': 'AMARELO',
//   VERMELHO: 0,
//   AZUL: 1,
//   AMARELO: 2
// }

console.log(Cores[0]); // VERMELHO
console.log(Cores.VERMELHO); // 0

enum OutrasCores {
  VERMELHO = 10,   // 10
  AZUL = 20,       // 20
  AMARELO= 30,    // 30
};

console.log(OutrasCores[30]); // AMARELO

// É possivel mergear os Enums

enum OutrasCores {
  ROXO = 'ROXO', // Após o roxo deve-se ter um valor, pois o typescript nao consegue prosseguir com a sequencia 'ROXO'
  MAGENTA = 31, // O marrom só pode ser escrito pois o magenta corresponde a um numero
  MARROM,
}

console.log(OutrasCores);
// VALORES MERGEADOS
// {
//   '10': 'VERMELHO',
//   '20': 'AZUL',
//   '30': 'AMARELO',
//   '31': 'MAGENTA',
//   '32': 'MARROM',
//   VERMELHO: 10,
//   AZUL: 20,
//   AMARELO: 30,
//   ROXO: 'ROXO',
//   MAGENTA: 31,
//   MARROM: 32
// }
