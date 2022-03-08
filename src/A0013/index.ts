// Criando um tipo; Alias ,para melhorar a leitura do codigo

// Toda idade é um tipo;
type Idade = number;

// Pode criar objetos
type Pessoa = {
  nome: string,
  idade: Idade,
  corPreferida?: TodasCores,
};

type CorRGB = 'Vermelho' | 'Azul' | 'Preto';
type CorDif = 'Magenta' | 'Amarelo' | 'Branco';

type TodasCores = CorDif | CorRGB;


const pessoa: Pessoa = {
  nome: 'Jezini',
  idade: 20,
}

function setFavoriteColor(pessoa: Pessoa, cor: TodasCores): Pessoa {
  return { ...pessoa, corPreferida: cor }
};

// Ao escrever o segundo parametro, as opcoes já aparece.
// E o typescript avisa caso o parametro nao esteja dentro das opçoes
console.log(setFavoriteColor(pessoa, 'Amarelo'));


export default pessoa;
