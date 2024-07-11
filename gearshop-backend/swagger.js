const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const AuthController = require('./routes/auth')
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Auth API',
            version: '1.0.0',
            description: 'A simple Express Auth API'
        },
        servers: [
            {
                url: 'http://localhost:7050',
            },
        ],
    },
     apis: ['./routes/*.js', ],
};

const swaggerDocs = swaggerJsDoc(options);

module.exports = { swaggerDocs, swaggerUi };
