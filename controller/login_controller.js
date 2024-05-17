// /src/controllers/clienteController.js
const LoginUseCase = require('../usecase/login_usecase');

exports.criar = async (req, res) => {
  try {
    const novoLogin = await LoginUseCase.criar(req.body);
    res.status(201).json(novoLogin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.listar = async (req, res) => {
  try {
    const logins = await LoginUseCase.listar();
    res.json(logins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  try {
    const login = await LoginUseCase.buscarPorId(parseInt(req.params.id));
    res.json(login);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.atualizar = async (req, res) => {
  try {
    await LoginUseCase.atualizar(parseInt(req.params.id), req.body);
    res.json({ message: 'Login atualizado com sucesso' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deletar = async (req, res) => {
  try {
    await LoginUseCase.deletar(parseInt(req.params.id));
    res.json({ message: 'Login deletado com sucesso' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};