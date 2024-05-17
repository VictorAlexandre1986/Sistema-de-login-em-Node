// /src/routes/clienteRoutes.js
/**
 * @openapi
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       required:
 *         - nome
 *         - cpf
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do cliente
 *         nome:
 *           type: string
 *           description: Nome do cliente
 *         cpf:
 *           type: string
 *           description: CPF do cliente
 *         email:
 *           type: string
 *           format: email
 *           description: Email do cliente
 *         telefone:
 *           type: string
 *           description: Telefone do cliente
 */

const express = require('express');
const router = express.Router();
const clienteController = require('../controller/cliente_controller');

/**
 * @openapi
 * /clientes:
 *   get:
 *     summary: Lista todos os clientes
 *     responses:
 *       '200':
 *         description: Lista de clientes
 *   post:
 *     summary: Cria um novo cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Cliente"
 *     responses:
 *       '201':
 *         description: Cliente criado com sucesso
 *       '400':
 *         description: Erro na requisição
 */

router.post('/', clienteController.criar);
router.get('/', clienteController.listar);
router.get('/:id', clienteController.buscarPorId);

/**
 * @openapi
 * /clientes/{id}:
 *   get:
 *     summary: Busca um cliente pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do cliente a ser buscado
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Cliente encontrado
 *       '404':
 *         description: Cliente não encontrado
 *   put:
 *     summary: Atualiza um cliente existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do cliente a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Cliente"
 *     responses:
 *       '200':
 *         description: Cliente atualizado com sucesso
 *       '404':
 *         description: Cliente não encontrado
 *   delete:
 *     summary: Deleta um cliente existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do cliente a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Cliente deletado com sucesso
 *       '404':
 *         description: Cliente não encontrado
 */

router.put('/:id', clienteController.atualizar);
router.delete('/:id', clienteController.deletar);

module.exports = router;