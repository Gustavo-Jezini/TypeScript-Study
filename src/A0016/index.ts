// O FN é para identificar uma FuNção;

// Apenas um tipo, antes de escrever a funcao
// O user é o usuario real no banco de dados, o sentValues sao os valores que foram enviados por um, por exemplo, formulario

type VerifyUserFn = (user: User, sentValues: User) => boolean
type User = {
  username: string,
  password: string
}


const verifyUser: VerifyUserFn = (user, sentValues) => {
  return user.username === sentValues.username && user.password === sentValues.password;
}

const dbUser = { username: 'Jezini', password: '12345'};
const sentUser = { username: 'Jezini', password: '12345'};

console.log(verifyUser(dbUser, sentUser));
