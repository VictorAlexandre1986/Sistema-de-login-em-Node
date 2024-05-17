// /src/controllers/clienteController.js
const ClienteUseCase = require('../usecase/cliente_usecase');

exports.criar = async (req, res) => {
  try {
    const novoCliente = await ClienteUseCase.criar(req.body);
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.listar = async (req, res) => {
  try {
    const clientes = await ClienteUseCase.listar();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  try {
    const cliente = await ClienteUseCase.buscarPorId(parseInt(req.params.id));
    res.json(cliente);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.atualizar = async (req, res) => {
  try {
    await ClienteUseCase.atualizar(parseInt(req.params.id), req.body);
    res.json({ message: 'Cliente atualizado com sucesso' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deletar = async (req, res) => {
  try {
    await ClienteUseCase.deletar(parseInt(req.params.id));
    res.json({ message: 'Cliente deletado com sucesso' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};