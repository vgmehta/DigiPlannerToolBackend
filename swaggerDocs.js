const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "DigiPlanner APIs",
            description: "DigiPlanner APIs Information",
            servers: ["http://0.0.0.0:8080"],
            license: {
                name: "Apache 2.0",
                url: "https://www.apache.org/licenses/LICENSE-2.0.html"
            },
        }
    },
    apis: ["./routes/userRouter.js", "./routes/boardRouter.js", "./routes/roomRouter.js"]
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}
