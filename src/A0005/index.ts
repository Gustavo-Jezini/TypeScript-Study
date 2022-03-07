// Array<T>

function multiplyer(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaString(...args: Array<string>) {
  return args.reduce((ac, valor) => ac + ' ' + valor, '');
}


console.log(multiplyer(1,2,3,4))

console.log(concatenaString('o', 'pai', 'ta', 'ON!'))
