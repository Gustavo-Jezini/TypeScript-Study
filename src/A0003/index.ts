function withoutReturn(...args: string[]): void {
  console.log(args.join(' '));
}

withoutReturn('Jezini', 'Gustavo')

const pessoa = {
  nome: 'Gustavo',
  sobrenome: 'Jezini',

  // Diz que retorna um vazio. Para evitar reclamação do lint
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
}

pessoa.exibirNome();

export default withoutReturn;
