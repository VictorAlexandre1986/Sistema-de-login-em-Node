// /src/routes/login.js
const express = require('express');
const router = express.Router();
const loginController = require('../controller/login_controller');
const { authenticateToken } = require('../middleware/auth');
/**
 * @openapi
 * components:
 *   schemas:
 *     Logins:
 *       type: object
 *       required:
 *         - username
 *         - password
 * 
 *       properties:
 *         username:
 *           type: string
 *           description: Usuario do login
 *         password:
 *           type: string
 *           description: Senha do login
 *         
 */



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
 *             $ref: "#/components/schemas/Logins"
 *     responses:
 *       '201':
 *         description: Login criado com sucesso
 *       '400':
 *         description: Erro na requisição
 */

router.post('/', loginController.criar);
router.get('/', loginController.listar);
router.get('/:id', loginController.buscarPorId);
router.post('/logar', loginController.logar);

/**
 * @openapi 
 *  /logins/logar:
 *   post:
 *     summary: Cria um novo login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Logins"
 *     responses:
 *       '200':
 *         description: login encontrado
 *       '404':
 *         description: login não encontrado
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
 *             $ref: "#/components/schemas/Logins"
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

router.put('/:id', authenticateToken, loginController.atualizar);
router.delete('/:id', authenticateToken, loginController.deletar);

module.exports = router;