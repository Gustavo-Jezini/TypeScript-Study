// return NEVER
// Pode vir de um laço infinito, ou funcao que cria ERRO

// Poderia ser Void, porem o never deixa explicito que
// a funcao nao tem intuito de retornar algo,

function createErro(): never {
  throw new Error('Erro de exemplo')
}

createErro();
