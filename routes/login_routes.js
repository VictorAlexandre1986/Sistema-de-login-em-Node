// /src/routes/login.js
/**
 * @openapi
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       required:
 *         - username
 *         - password
 * 
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do login
 *         username:
 *           type: string
 *           description: Usuario do login
 *         password:
 *           type: string
 *           description: Senha do login
 *         
 */

const express = require('express');
const router = express.Router();
const loginController = require('../controller/login_controller');

/**
 * @openapi
 * /logins:
 *   get:
 *     summary: Lista todos os logins
 *     responses:
 *       '200':
 *         description: Lista todos logins
 *   post:
 *     summary: Cria um novo login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Login"
 *     responses:
 *       '201':
 *         description: Login criado com sucesso
 *       '400':
 *         description: Erro na requisição
 */

router.post('/', loginController.criar);
router.get('/', loginController.listar);
router.get('/:id', loginController.buscarPorId);

/**
 * @openapi
 * /logins/{id}:
 *   get:
 *     summary: Busca um login pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do login a ser buscado
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: login encontrado
 *       '404':
 *         description: login não encontrado
 *   put:
 *     summary: Atualiza um login existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do login a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Login"
 *     responses:
 *       '200':
 *         description: Login atualizado com sucesso
 *       '404':
 *         description: Login não encontrado
 *   delete:
 *     summary: Deleta um login existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do login a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Login deletado com sucesso
 *       '404':
 *         description: Login não encontrado
 */

router.put('/:id', loginController.atualizar);
router.delete('/:id', loginController.deletar);

module.exports = router;