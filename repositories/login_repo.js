// /src/repositories/clienteRepository.js
const { PrismaClient } = require('@prisma/client');
const Prisma = new PrismaClient();

class LoginRepository {
  async criar(loginData) {
    return await Prisma.login.create({ data: loginData });
  }

  async listar() {
    return await Prisma.login.findMany();
  }

  async buscarPorId(id) {
    return await Prisma.login.findUnique({ where: { id } });
  }

  async atualizar(id, loginData) {
    return await Prisma.login.update({ where: { id }, data: loginData });
  }

  async deletar(id) {
    return await Prisma.login.delete({ where: { id } });
  }
}

module.exports = new LoginRepository();