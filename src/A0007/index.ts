// é possivel ter mais de uma opção para retorno de funçao,
// Facilita a verificaçao de um retorno
function squareOf(x: unknown) {
  if (typeof x === 'number') return x * x;

  return null;
}

// Ao chamar uma funcao e passar o mouse por cima,
// é possivel saber quais sao os possiveis retornos da funcao

squareOf(2);
