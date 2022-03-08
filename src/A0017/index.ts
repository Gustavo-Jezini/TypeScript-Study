const body = document.querySelector('body')!; // O ponto de esclamaçao no final diz que o objeto é Não Nulo
// porem o linter reclama do ponto de exclamçao

body.style.background = 'red';

// Verifica se existe
if (body) body.style.background = 'red';


// Type assertion , Caso tenha certeza que vai estar na tela a todo momento
const body2 = document.querySelector('body') as HTMLBodyElement;

body2.style.background = 'red';

