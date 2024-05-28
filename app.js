const express = require('express');
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const loginRoutes = require('./routes/login_routes');
const clienteRoutes = require('./routes/cliente_routes');

app.use(express.json());

// Definição do Swagger
const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'API Login',
        description: 'Documentação da API para gerenciar imóveis, clientes, contratos e pagamentos',
        version: '1.0.0',
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Servidor local',
        },
      ],
    },
    apis: ['./routes/*.js'], // Adicione aqui o caminho para os arquivos de rota
  };
  
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/logins', loginRoutes);
app.use('/clientes', clienteRoutes);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;