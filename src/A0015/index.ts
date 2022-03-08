// Tipar função
// Criar uma funcao que faz um '.map(() => )'

type MapStringCallback = (item: string) => string;


function mapStrings(array: string[], callback: MapStringCallback): string[] {
  const newArray: string[] = [];

  for (let index = 0; index < array.length; index++) {
    newArray.push(callback(array[index]));
  }

  return newArray;
}

const abc = [ 'a', 'b', 'c' ];

// Ao escrever item. => aparecem hooks para trabalhar com Strings,
// pois ele sabia que a callback retornaria uma string, devido a tipagem feita na linha 4
const abcMapped = mapStrings(abc, item => item.toUpperCase())

console.log(abcMapped, abc);
