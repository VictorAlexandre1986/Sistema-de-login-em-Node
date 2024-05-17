// /src/useCases/clienteUseCase.js
const ClienteRepository = require('../repositories/cliente_repo');
const Cliente = require('../entities/cliente_entity');

class ClienteUseCase {
  async criar(clienteData) {
    const novoCliente = await ClienteRepository.criar(clienteData);
    return new Cliente(novoCliente);
  }

  async listar() {
    const clientes = await ClienteRepository.listar();
    return clientes.map(cliente => new Cliente(cliente));
  }

  async buscarPorId(id) {
    const cliente = await ClienteRepository.buscarPorId(id);
    if (!cliente) {
      throw new Error('Cliente não encontrado');
    }
    return new Cliente(cliente);
  }

  async atualizar(id, clienteData) {
    await ClienteRepository.buscarPorId(id); // Verifica se o cliente existe
    return await ClienteRepository.atualizar(id, clienteData);
  }

  async deletar(id) {
    await ClienteRepository.buscarPorId(id); // Verifica se o cliente existe
    return await ClienteRepository.deletar(id);
  }
}

module.exports = new ClienteUseCase();