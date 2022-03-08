// Any é uma otima opçao, Pode gerar problema na hora de compilar

function showMessage (msg: any) {
  return msg;
}

console.log(showMessage(['', 2, 3]));
