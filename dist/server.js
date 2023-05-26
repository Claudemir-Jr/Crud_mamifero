"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT;
const server = (0, fastify_1.default)();
server.register(cors_1.default, {
//Opções
});
server.get('/', (request, reply) => {
    return "Servidor Exemplo on line...";
});
server.listen({ port }, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    else {
        console.log(`Servidor rodando em ${address}`);
    }
});
