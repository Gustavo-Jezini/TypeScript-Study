// Objeto A nao tem auto complete, o typescript ja nao reconhece mais o conteudo;
// Unknown é ainda mais abrangente que o modo Any, e portanto , tambem deve ser evitado.
// Porem, é possivel criar uma outra chave desde que siga a regra
const objetoA: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}

objetoA['chaveC'] = 'Teste';

console.log(objetoA); // { chaveA: 'Valor A', chaveB: 'Valor B', chaveC: 'Teste' }

// Diz que é um objeto sem chave, mas ele claramente tem chaves, portanto é melhor evitar esse tipo de tipagem
const objetoB: {} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}

console.log(objetoB);


// é uma opção valida
const objetoC = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}


// ChaveC é opcional
// E agora é possivel criar um novo objeto,
// A key, é para situações imprevistas, note que a chave C é possivel
// de ser utilizado, porem nao é obrigatório.
const objetoD: {
  chaveA: string,
  chaveB: string,
  chaveC?: string,
  // index signature
  [key:string]: unknown; // poderia ser any, porem deixa um alerta
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}

console.log(objetoD);

// Para evitar o uso dessas aberturas é pensar bastante sobre o objeto
