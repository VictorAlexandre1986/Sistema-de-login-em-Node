// /src/entities/cliente.js
class Cliente {
    constructor({ id, nome, cpf, email, telefone, contratos }) {
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
      this.email = email;
      this.telefone = telefone;
      this.contratos = contratos;
    }
  }
  
  module.exports = Cliente;