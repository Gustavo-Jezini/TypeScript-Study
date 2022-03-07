let x = 10;
x = 0b010;


// o tipo da const é 10, isso se chama tipo literal
const y = 10;


console.log(y);


// para objeto, é possivel realizar uma asserçao , impossibilitar uma modança especifica
const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Nurada'
};

// pessoa.nome = 'Jezini' // Nao pode ser feito

function escolhaCor(cor: 'Vermelho' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Azul')); // Aparece a recomendação
// escolhaCor(cor: "Vermelho" | "Azul"): "Vermelho" | "Azul"


export default x;
