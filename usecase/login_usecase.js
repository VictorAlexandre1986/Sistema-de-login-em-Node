// /src/useCases/loginUseCase.js
const LoginRepository = require('../repositories/login_repo');
const Login = require('../entities/login_entity');
const  createHash   = require('../utils/utils')
const jwt = require('jsonwebtoken');


class LoginUseCase {
  async criar(loginData) {
    let username = loginData.username
    let senha = loginData.password
    const senha_criptgrafada = createHash(senha)
    const data={
      username:username,
      password:senha_criptgrafada
    }
    const novoLogin = await LoginRepository.criar(data);
    return new Login(novoLogin);
  }

  async logar(loginData){
    let username = loginData.username
    let senha = loginData.password
    const senha_criptgrafada = createHash(senha)
    const data = {
      username:username,
      password: senha_criptgrafada
    }
    const logando = await LoginRepository.logar(data);
    if(!logando){
      throw new Error('Login não encontrado')
    }
    const token = jwt.sign({ username: data.username }, process.env.JWT_SECRET, { expiresIn: '24h' });
    // console.log(res.json({token}))
    return new Login(logando)
  }

  async listar() {
    const logins = await LoginRepository.listar();
    return logins.map(login => new Login(login));
  }

  async buscarPorId(id) {
    const login = await LoginRepository.buscarPorId(id);
    if (!login) {
      throw new Error('Login não encontrado');
    }
    return new Login(login);
  }

  async atualizar(id, loginData) {
    await LoginRepository.buscarPorId(id); // Verifica se o cliente existe
    return await LoginRepository.atualizar(id, loginData);
  }

  async deletar(id) {
    await LoginRepository.buscarPorId(id); // Verifica se o cliente existe
    return await LoginRepository.deletar(id);
  }
}

module.exports = new LoginUseCase();