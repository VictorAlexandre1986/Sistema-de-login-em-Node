// /src/repositories/clienteRepository.js
const { PrismaClient } = require('@prisma/client');
const Prisma = new PrismaClient();

class ClienteRepository {
  async criar(clienteData) {
    return await Prisma.cliente.create({ data: clienteData });
  }

  async listar() {
    return await Prisma.cliente.findMany();
  }

  async buscarPorId(id) {
    return await Prisma.cliente.findUnique({ where: { id } });
  }

  async atualizar(id, clienteData) {
    return await Prisma.cliente.update({ where: { id }, data: clienteData });
  }

  async deletar(id) {
    return await Prisma.cliente.delete({ where: { id } });
  }
}

module.exports = new ClienteRepository();