// /src/useCases/loginUseCase.js
const LoginRepository = require('../repositories/login_repo');
const Login = require('../entities/login_entity');

class LoginUseCase {
  async criar(loginData) {
    const novoLogin = await LoginRepository.criar(loginData);
    return new Login(novoLogin);
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