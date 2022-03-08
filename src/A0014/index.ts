// Union type => ou esse | ou isso


// Essa aula é sobre intersection type

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };


// O objeto abaixo PODE ter nome, sobrenome, idade
type Pessoa = TemNome | TemIdade | TemSobrenome

// Se eu for criar um objeto pessoa , todos esses campos serao opcionais

const pessoa: Pessoa = {
  idade: 20
}
// Só da erro se eu nao usar nenhuma chave

type Pessoa2 = TemNome & TemIdade & TemSobrenome

const pessoa2: Pessoa2 = {
  idade: 20,
  nome: 'Gustavo',
  sobrenome: 'Jez'
};

export default pessoa;
