let nome: string = 'Luiz';

const arrayDeNumeros: Array<number> = [1, 2, 3];
const arrayDeStrings: Array<string> = ['1', '2', '3'];
const arrayDeNumeros2: number[] = [1, 2, 3];

// Objeto
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 20,
  nome: 'Jezini',
}

// Funcao
function soma (x: number, y: number): number {
  return x + y;
}

// Aqui a atribuiçao é tudo que vem antes do sinal de igual,
// Nao precisa inferir o tipo de valor antes, apenas se o retorno for algo indesejado como "Any"

const soma2: (x: number, y: number) => number = (x, y) => x + y;
